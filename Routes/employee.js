const express = require('express');
const router = express.Router();
const {Create, list, getById, updateById, deleteById} = require('../Controller/employee');
router.post('/create/employee', Create);
router.get('/list/employee/', list);
router.get('/getById/employee/:id', getById);
router.put('/updateById/employee/:id', updateById);
router.delete('/deleteById/employee/:id', deleteById);

module.exports = router;