import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)

router.get('/:id', postsCtrl.show)

// router.get('/:id/edit', isLoggedIn, exercisesCtrl.edit)

router.post('/', isLoggedIn, postsCtrl.create)

// router.post('/:id', exercisesCtrl.add)



export {
  router
}