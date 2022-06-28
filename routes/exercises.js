import { Router } from 'express'
import * as exercisesCtrl from '../controllers/exercises.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', exercisesCtrl.index)

router.post('/', isLoggedIn, exercisesCtrl.create)

router.post('/:id', exercisesCtrl.add)

export {
  router
}