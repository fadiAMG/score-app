#!/bin/bash

# Function to stop all processes on exit
cleanup() {
    echo "Stopping all processes..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set up cleanup on script exit
trap cleanup EXIT INT TERM

# Start the server
echo "Starting server..."
cd server
npm install
npm run dev &

# Wait a bit for server to initialize
sleep 2

# Start the client
echo "Starting client..."
cd ../client
npm install
npm run dev &

# Keep script running
wait