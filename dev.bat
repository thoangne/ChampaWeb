@echo off
title Dana Community Tourism - Dev Server
echo ==============================================================
echo     DANA COMMUNITY TOURISM - Panduranga Heritage
echo ==============================================================
echo Dang kiem tra dependencies...

if not exist "backend\node_modules\" (
    echo [1/2] Dang cai dat thu vien cho Backend...
    call npm install --prefix backend
)

if not exist "frontend\node_modules\" (
    echo [2/2] Dang cai dat thu vien cho Frontend...
    call npm install --prefix frontend
)

echo.
echo ==============================================================
echo Khoi dong Frontend (http://localhost:5173) va Backend (http://localhost:5000)...
echo ==============================================================
node dev.js
pause

