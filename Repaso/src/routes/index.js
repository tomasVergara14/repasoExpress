var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController.js')

/* GET home page. */
router.get('/', indexController.index);

router.get('/register', indexController.register)

router.get('/login', indexController.login)

module.exports = router;
