const express = require('express')
const router = express.Router()
// middlewares

const { authCheck, adminCheck } = require('../middlewares/auth');

// controllers


const { create, read, update, remove, list } = require('../controllers/category')
//routes
router.post('/category', authCheck, adminCheck, create)
router.get('/categories', list)
router.put('/category/:slug', authCheck, adminCheck, update)
router.get('/category/:slug', read)
router.delete('/category/:slug', authCheck, adminCheck, remove)
module.exports = router 