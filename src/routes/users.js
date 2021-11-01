const express = require('express');
const router = express.Router();
const {userController} = require('../controller')
//const {location} = require('../middleware')

/* GET users listing. */
router.post('/',userController.createUser);

router.post('/login',userController.login);
  
module.exports = router;
