# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Sao chép file khai báo dependency
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn backend
COPY . .

# Mở cổng 5000 cho backend API
EXPOSE 5000

# Khởi chạy server
CMD ["node", "server.js"]