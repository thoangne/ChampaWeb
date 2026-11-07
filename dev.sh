#!/usr/bin/env bash

echo "=============================================================="
echo "    DANA COMMUNITY TOURISM - Panduranga Heritage"
echo "=============================================================="

if [ ! -d "backend/node_modules" ]; then
    echo "[1/2] Đang cài đặt thư viện cho Backend..."
    npm install --prefix backend
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "[2/2] Đang cài đặt thư viện cho Frontend..."
    npm install --prefix frontend
fi

echo ""
echo "Khởi động Frontend (http://localhost:5173) và Backend (http://localhost:5000)..."
node dev.js

