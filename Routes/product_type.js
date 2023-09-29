const express = require('express');
const router = express.Router();
const {create, list, getById, updateById, deleteById } = require('../Controller/product_type');
router.post('/create/product_type', create);
router.get('/list/product_type', list);
router.get('/getById/product_type/:id', getById);
router.put('/updateById/product_type/:id', updateById);
router.delete('/deleteById/product_type/:id', deleteById);

module.exports = router;