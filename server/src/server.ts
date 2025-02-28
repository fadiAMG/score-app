import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { CSVScoreRepository } from './repositories/CSVScoreRepository'
import { ScoreService } from './services/ScoreService'
import { createScoreRouter } from './routes/scoreRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const csvFilePath = path.join(__dirname, '../../scores.csv')
const scoreRepository = new CSVScoreRepository(csvFilePath)
const scoreService = new ScoreService(scoreRepository)

app.use('/api/scores', createScoreRouter(scoreService))

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
)
