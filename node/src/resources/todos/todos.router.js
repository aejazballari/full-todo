import {Router} from 'express'
// import cors from 'cors'
import {getTodo, postTodo, postDelete, postPatch} from './todos.controller.js'

const router = Router()

router.route('/').get(getTodo).post(postTodo)
router.route('/:id').delete(postDelete).patch(postPatch)

export default router