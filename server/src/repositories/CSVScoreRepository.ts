import fs from 'fs'
import csvParser from 'csv-parser'
import { IScoreRepository } from './IScoreRepository'
import { ScoreRecord } from '../interfaces/ScoreRecord'
import { DataAccessError } from '../utils/errors'

export class CSVScoreRepository implements IScoreRepository {
    constructor(private filePath: string) {}

    public getAllScores(): Promise<ScoreRecord[]> {
        return new Promise((resolve, reject) => {
            const results: ScoreRecord[] = []
            fs.createReadStream(this.filePath)
                .pipe(
                    csvParser({
                        headers: ['studentName', 'courseName', 'score', 'date'],
                        skipLines: 1,
                    })
                )
                .on('data', (data) => {
                    results.push({
                        studentName: data.studentName,
                        courseName: data.courseName,
                        score: parseInt(data.score, 10),
                        date: data.date,
                    })
                })
                .on('end', () => resolve(results))
                .on('error', (err) =>
                    reject(new DataAccessError('Error reading CSV file'))
                )
        })
    }
}
