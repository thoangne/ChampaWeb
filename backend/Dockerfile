# backend/Dockerfile
FROM node:22-alpine

WORKDIR /app

# Sao chép file khai báo dependency
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn backend
COPY . .

# Mở cổng cho backend API (hỗ trợ cả biến PORT của Cloud Run)
EXPOSE 5000

# Khởi chạy server
CMD ["node", "server.js"]
