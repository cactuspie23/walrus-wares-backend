import { Router } from 'express'
import * as cartsCtrl from '../controllers/carts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, cartsCtrl.index)
router.get('/:id', checkAuth, cartsCtrl.show)
router.post('/', checkAuth, cartsCtrl.addCartItem)
router.delete('/:id', checkAuth, cartsCtrl.deleteCartItem)

export { router }