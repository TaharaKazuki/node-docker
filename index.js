import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => console.info(`start server: PORT ${port}`))
