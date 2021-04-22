var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')

router.get('/',registerController.register)
router.get('/detalle/:id', registerController.detail)

module.exports = router