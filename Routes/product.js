const express = require('express');
const router = express.Router();
// controllers
const {create, list, getById, UpdateById, DelectById} = require('../Controller/product');
// middleware
const { auth } = require('../Middleware/auth');
const {upload} = require('../Middleware/Upload');

router.post('/create/product', auth, upload, create)
router.get('/list/product', auth, list)
router.get('/getById/product/:id', auth, getById)
router.put('/UpdateById/product/:id', auth, UpdateById)
router.delete('/DelectById/product/:id', auth, DelectById)

module.exports = router;