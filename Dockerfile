# ==========================================
# Giai đoạn 1: Build Frontend (Vite + React)
# ==========================================
FROM node:22-alpine AS frontend-builder
WORKDIR /app/frontend

# Khai báo build arguments nếu cần truyền biến môi trường lúc build
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# ==========================================
# Giai đoạn 2: Chuẩn bị Backend & Runtime
# ==========================================
FROM node:22-alpine
WORKDIR /app/backend

ENV NODE_ENV=production
ENV PORT=8080

COPY backend/package*.json ./
RUN npm install --only=production

COPY backend/ ./

# Sao chép thư mục dist đã build của frontend vào public_client của backend
COPY --from=frontend-builder /app/frontend/dist ./public_client

# Cloud Run tự động inject biến PORT (mặc định 8080)
EXPOSE 8080

CMD ["node", "server.js"]
