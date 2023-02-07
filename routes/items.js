import { Router } from 'express'
import * as itemsCtrl from '../controllers/items.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', itemsCtrl.index)
router.get('/:id', itemsCtrl.show)


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.put('/:id', checkAuth, itemsCtrl.update)
router.post('/', checkAuth, itemsCtrl.create)
router.delete('/:id', checkAuth, itemsCtrl.deleteItem)

export { router }