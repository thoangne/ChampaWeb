#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

console.log('\x1b[36m%s\x1b[0m', '==============================================================');
console.log('\x1b[33m%s\x1b[0m', '    🌴 DANA COMMUNITY TOURISM - Panduranga Heritage 🌴');
console.log('\x1b[36m%s\x1b[0m', '==============================================================');
console.log('🚀 Khởi chạy song song Backend (cổng 5000) & Frontend (cổng 5173)...');
console.log('📌 Backend API : \x1b[34mhttp://localhost:5000/api\x1b[0m (Health check: \x1b[34mhttp://localhost:5000/api/health\x1b[0m)');
console.log('📌 Frontend App: \x1b[32mhttp://localhost:5173\x1b[0m');
console.log('\x1b[90m%s\x1b[0m', 'Nhấn Ctrl+C để dừng cả 2 dịch vụ cùng lúc.');
console.log('\x1b[36m%s\x1b[0m', '--------------------------------------------------------------\n');

function runService(name, color, cwd, args) {
  const child = spawn(npmCmd, args, {
    cwd: path.resolve(__dirname, cwd),
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  const prefix = `${color}[${name}]\x1b[0m `;

  child.stdout.on('data', (data) => {
    const lines = data.toString().split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        console.log(prefix + line);
      }
    });
  });

  child.stderr.on('data', (data) => {
    const lines = data.toString().split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        console.error(prefix + '\x1b[31m' + line + '\x1b[0m');
      }
    });
  });

  child.on('close', (code) => {
    if (code !== 0 && code !== null) {
      console.log(`${prefix}Đã dừng với mã thoát ${code}`);
    }
  });

  return child;
}

// 1. Chạy Backend
const backend = runService('BACKEND ', '\x1b[34m', 'backend', ['run', 'start']);

// 2. Chạy Frontend
const frontend = runService('FRONTEND', '\x1b[32m', 'frontend', ['run', 'dev']);

function cleanup() {
  console.log('\n\x1b[33mĐang tắt Frontend và Backend...\x1b[0m');
  
  if (isWin) {
    if (backend.pid) spawn('taskkill', ['/pid', backend.pid, '/f', '/t'], { stdio: 'ignore' });
    if (frontend.pid) spawn('taskkill', ['/pid', frontend.pid, '/f', '/t'], { stdio: 'ignore' });
  } else {
    if (backend.pid) backend.kill('SIGINT');
    if (frontend.pid) frontend.kill('SIGINT');
  }

  setTimeout(() => process.exit(0), 500);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

