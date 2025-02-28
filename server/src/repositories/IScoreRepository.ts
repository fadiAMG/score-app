import { ScoreRecord } from '../interfaces/ScoreRecord'

export interface IScoreRepository {
    getAllScores(): Promise<ScoreRecord[]>
}
