import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h2>Hi There</h2>')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.info(`start server: PORT ${port}`))
