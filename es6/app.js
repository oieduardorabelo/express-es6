'use strict'

import express from 'express'
import Routes from './routes'

const app = express()
const server = app.listen(3000, ()=> {
  let host = server.address().address
  let port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})

app.use('/', Routes.home)
