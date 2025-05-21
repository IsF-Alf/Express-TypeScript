import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Fetching all diaries')
})

router.post('/', (_req, res) => {
//   const { date, weather, visibility } = req.body;
//  console.log(date, weather, visibility);
  res.send('Saving a diary!')
})

export default router
