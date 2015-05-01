'use strict'

import HomeRouter from './HomeRouter'
import ContactRouter from './ContactRouter'

export default function(app) {
  app.use('/', HomeRouter)
  app.use('/contact', ContactRouter)
};
