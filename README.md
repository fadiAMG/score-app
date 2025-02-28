# Score Management Application

A full-stack application for managing and displaying student scores using React, TypeScript, and Node.js.

## Overview

This application provides a user interface to view and filter student scores across different courses. It uses a CSV file as the data source and provides filtering capabilities by student name and course.

## Features

-   View all student scores
-   Filter scores by student name
-   Filter scores by course name
-   Responsive design
-   Docker support
-   TypeScript implementation

## Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   Docker and Docker Compose (optional)
-   Git

## Installation

### Clone the Repository

git clone https://github.com/fadiAMG/score-app.git
cd score-app

## Backend setup

cd server
npm install

## Env variables

PORT=8080
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

## Frontend setup

cd client
npm install

## Running the Application

### Method 1: Using Shell Script

./start.sh

### Method 2: Manual Start

## Backend

cd server
npm run dev

## Frontend - in another terminal

cd client
npm run dev

### Method 3: Using Docker

./start-docker.sh

## Project Structure

score-app/
├── client/ # Frontend React application
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── App.tsx # Main application component
│ │ └── main.tsx # Entry point
│ ├── Dockerfile
│ └── package.json
│
├── server/ # Backend Express application
│ ├── src/
│ │ ├── config/ # Configuration files
│ │ ├── interfaces/ # TypeScript interfaces
│ │ ├── repositories/ # Data access layer
│ │ ├── services/ # Business logic
│ │ ├── routes/ # API routes
│ │ ├── utils/ # Utilities
│ │ └── server.ts # Entry point
│ ├── Dockerfile
│ └── package.json
│
├── docker-compose.yml # Docker composition
├── scores.csv # Data source
├── start.sh # Local startup script
├── start-docker.sh # Docker startup script
└── README.md

## API Documentation

### GET /api/scores

Retrieves student scores with optional filtering.

Query Parameters:

-   student (optional): Filter by student name
-   course (optional): Filter by course name
    Response Format:

[
{
"studentName": "string",
"courseName": "string",
"score": number,
"date": "string"
}
]

##Examples
curl "http://localhost:8080/api/scores?student=John&course=Math"

## Development Guidelines

### Code Style

-   Use TypeScript for type safety
-   Follow SOLID principles
-   Implement proper error handling
-   Use async/await for asynchronous operations

### Architecture

-   Frontend: React with TypeScript
-   Backend: Node.js with Express
-   Data Storage: CSV file
-   Pattern: Repository pattern with service layer
-   API: RESTful endpoints

### Best Practices

-   Keep components small and focused
-   Maintain separation of concerns
-   Use TypeScript interfaces
-   Implement proper error handling
-   Follow consistent naming conventions

## Troubleshooting

### Common Issues and Solutions

1. Application won't start:

    - Check if ports 3000 and 8080 are available
    - Verify all dependencies are installed
    - Ensure .env file exists

2. CSV File Issues

    - Verify scores.csv exists in the correct location
    - Check file permissions
    - Ensure CSV format is correct

3. Docker Issues

    - Verify Docker daemon is running
    - Try rebuilding containers:

        docker-compose down
        docker-compose up --build

4. Frontend Can't Connect to Backend:
    - Check if backend is running
    - Verify CORS settings
    - Check API URL configuration
