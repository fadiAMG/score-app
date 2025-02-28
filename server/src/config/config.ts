import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export const config = {
    server: {
        port: process.env.PORT || 8080,
        env: process.env.NODE_ENV || 'development',
    },
    data: {
        csvPath: path.join(__dirname, '../../../scores.csv'),
    },
    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        credentials: true,
    },
}
