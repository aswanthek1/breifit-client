const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:4000/api/v1/'
const NEXT_APP_BASE_URL = process.env.NEXT_APP_BASE_URL || 'http://localhost:5002/'

export const configurations = {
    BASE_URL,
    NEXT_APP_BASE_URL
}