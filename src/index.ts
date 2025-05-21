import express from 'express'
import diarysRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Funcionando ' + new Date().toLocaleDateString())
  res.send('Pong!')
})

app.use('/api/diaries', diarysRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
