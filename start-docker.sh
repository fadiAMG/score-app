#!/bin/bash

# Function to stop all containers on exit
cleanup() {
    echo "Stopping Docker containers..."
    docker compose down
    exit
}

# Set up cleanup on script exit
trap cleanup EXIT INT TERM

# Build and start the containers
echo "Starting Docker containers..."
docker compose up --build

# Keep script running
wait