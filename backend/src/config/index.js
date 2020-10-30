import dotenv from 'dotenv'

dotenv.config()

export default Object.freeze({
    port: process.env.PORT,
    database: process.env.DATABASE_URL,
    ambient: process.env.NODE_ENV
})