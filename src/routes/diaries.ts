import express from 'express'
import * as diaryService from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
//   const { date, weather, visibility } = req.body;
//  console.log(date, weather, visibility);
  res.send('Saving a diary!')
})

export default router
