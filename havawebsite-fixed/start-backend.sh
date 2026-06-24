#!/bin/bash
# Start the HAVA backend on Mac/Linux
cd "$(dirname "$0")/backend"

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

source venv/bin/activate

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Starting backend on http://localhost:8000"
uvicorn server:app --reload --host 0.0.0.0 --port 8000
