import express from 'express'
import { register,verify,reVerify,login } from '../controllers/userController.js'

const router=express.Router()

router.post('/register',register)

router.post('/verify',verify)

router.post('/reverify',reVerify)

router.post('/login',login)

//router.post('/logout',logout)

export default router