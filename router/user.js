const express = require('express');
const router = express.Router();

const user_handler = require('../router_handler/user');

//注册新用户0
router.post('/reguser', user_handler.regUser)

module.exports = router;
