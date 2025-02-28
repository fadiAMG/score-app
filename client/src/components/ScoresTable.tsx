import React, { useState, useEffect } from 'react'
import { fetchScores } from '../api'
import styles from './ScoresTable.module.css'

interface ScoreRecord {
    studentName: string
    courseName: string
    score: number
    date: string
}

const ScoresTable: React.FC = () => {
    const [scores, setScores] = useState<ScoreRecord[]>([])
    const [studentFilter, setStudentFilter] = useState('')
    const [courseFilter, setCourseFilter] = useState('')

    useEffect(() => {
        const loadScores = async () => {
            const data = await fetchScores(studentFilter, courseFilter)
            setScores(data)
        }
        loadScores()
    }, [studentFilter, courseFilter])

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Student Scores</h1>
            <div className={styles.filters}>
                <input
                    type="text"
                    placeholder="Filter by Student"
                    value={studentFilter}
                    onChange={(e) => setStudentFilter(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Filter by Course"
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                    className={styles.input}
                />
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Course Name</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{score.studentName}</td>
                            <td>{score.courseName}</td>
                            <td>{score.score}</td>
                            <td>{score.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ScoresTable
