# Bước 1: Môi trường Build
FROM node:20-alpine as build
WORKDIR /app

# Copy package.json và cài đặt thư viện trước để tối ưu cache
COPY package*.json ./
RUN npm install

# Copy toàn bộ code và tiến hành build
COPY . .
RUN npm run build

# Bước 2: Môi trường Chạy (Production)
FROM node:20-alpine
WORKDIR /app

# Cài đặt công cụ serve để chạy file tĩnh và xử lý SPA routing (-s)
RUN npm install -g serve

# Chỉ lấy thư mục 'dist' (kết quả sau khi build) từ Bước 1 sang Bước 2
COPY --from=build /app/dist ./dist

# Mở cổng 3000
EXPOSE 3000

# Lệnh khởi chạy web
CMD ["serve", "-s", "dist", "-p", "3000"]