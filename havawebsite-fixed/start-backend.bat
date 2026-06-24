@echo off
REM Start the HAVA backend on Windows
cd /d "%~dp0backend"

if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

call venv\Scripts\activate.bat

echo Installing dependencies...
pip install -r requirements.txt

echo Starting backend on http://localhost:8000
uvicorn server:app --reload --host 0.0.0.0 --port 8000

pause
