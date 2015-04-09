'use strict'

import express from 'express'

const router = express.Router()

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res) {
  res.send('Birds home page')
})

router.get('/about', function(req, res) {
  res.send('About birds')
})

export default {
  home: router
}
