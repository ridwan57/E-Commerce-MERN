const express = require('express')
const router = express.Router()
// middlewares

const { authCheck, adminCheck } = require('../middlewares/auth');

// controllers


const { userCard } = require('../controllers/user')
//routes
router.post('/cart', authCheck,userCard)

module.exports = router
