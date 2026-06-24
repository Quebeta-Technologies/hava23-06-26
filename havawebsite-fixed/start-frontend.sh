#!/bin/bash
# Start the HAVA frontend on Mac/Linux
cd "$(dirname "$0")/frontend"

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies (this may take a few minutes)..."
    yarn install
fi

echo "Starting frontend on http://localhost:3000"
yarn start
