const express = require('express');
const { userController } = require('../controller')
const router = express.Router();
const expressLayout = require('express-ejs-layouts')
//const {auth} = require('../middleware')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', function (req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/sigout', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', function (req, res, next) {
  res.render('register');
});
router.get('/principal', function (req, res, next) {
  res.render('principal');
});

router.get("/dashboard",expressLayout, function(req, res, next) {
  res.render("dashboard");
});

router.get('/users',expressLayout,userController.getUsers);

module.exports = router ;
