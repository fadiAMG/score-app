import { Router, Request, Response } from 'express'
import { ScoreService } from '../services/ScoreService'

export const createScoreRouter = (scoreService: ScoreService) => {
    const router = Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const { student, course } = req.query
            const scores = await scoreService.getFilteredScores(
                student as string,
                course as string
            )
            res.json(scores)
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message })
            } else {
                res.status(500).json({
                    message: 'An unexpected error occurred',
                })
            }
        }
    })

    return router
}
