import axios from 'axios'

const API_URL = 'http://localhost:8080/api/scores'

export const fetchScores = async (student?: string, course?: string) => {
    try {
        const params: { student?: string; course?: string } = {}
        if (student) params.student = student
        if (course) params.course = course

        const response = await axios.get(API_URL, { params })
        return response.data
    } catch (error) {
        console.error('Error fetching scores:', error)
        return []
    }
}
