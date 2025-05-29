import express from 'express'
import * as diaryService from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id)
  if (diary !== null && diary !== undefined) {
    res.send(diary)
  } else {
    res.status(404).send('Diary not found')
  }
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryService.addDiary({
    date,
    weather,
    visibility,
    comment
  }
  )
  res.json(newDiaryEntry)
})

export default router
