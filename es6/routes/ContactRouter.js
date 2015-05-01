'use strict'

import express from 'express'

const router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res) {
  res.send('Contact page')
})

router.get('/:id', function(req, res) {
  if (req.params.id === '42') {
    console.log(req.params.id);
    return res.send('The answer to life, the universe and everything!')
  }
  res.send('Contact page')
})

export default router
