import { ScoreRecord } from '../interfaces/ScoreRecord'
import { IScoreRepository } from '../repositories/IScoreRepository'

export class ScoreService {
    constructor(private repository: IScoreRepository) {}

    async getFilteredScores(
        student?: string,
        course?: string
    ): Promise<ScoreRecord[]> {
        let records = await this.repository.getAllScores()

        if (student) {
            records = records.filter((r) =>
                r.studentName.toLowerCase().includes(student.toLowerCase())
            )
        }

        if (course) {
            records = records.filter((r) =>
                r.courseName.toLowerCase().includes(course.toLowerCase())
            )
        }

        return records
    }
}
