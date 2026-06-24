@echo off
REM Start the HAVA frontend on Windows
cd /d "%~dp0frontend"

if not exist "node_modules" (
    echo Installing dependencies (this may take a few minutes)...
    yarn install
)

echo Starting frontend on http://localhost:3000
yarn start

pause
