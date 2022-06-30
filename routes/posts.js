import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', postsCtrl.index)

router.get('/:id', postsCtrl.show)

router.get('/:id/edit', isLoggedIn, postsCtrl.edit)

router.post('/', isLoggedIn, postsCtrl.create)

router.put('/:id', isLoggedIn, postsCtrl.update)

router.delete('/:id', isLoggedIn, postsCtrl.delete)


router.post('/:id/comments', postsCtrl.createComment)

// router.patch('/:id/leave-comment', isLoggedIn, postsCtrl.leaveComment)

// router.post('/:id', exercisesCtrl.add)



export {
  router
}