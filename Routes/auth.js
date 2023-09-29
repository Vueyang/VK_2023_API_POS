const express = require('express');
const router = express.Router();
const {Register, Login} = require('../Controller/auth');

router.post('/create/register', Register )
router.post('/user/login', Login )

module.exports = router;