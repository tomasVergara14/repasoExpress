var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController.js')

/* GET home page. */
router.get('/', indexController.index);

router.get('/register', indexController.register)
router.post('/register', indexController.save)

router.get('/edit/:id', indexController.editview)
router.put('/edit/:id', indexController.edit)

router.get('/login', indexController.login)

module.exports = router;
