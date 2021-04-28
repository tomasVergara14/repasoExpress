var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController.js')
var multer = require('multer')
var path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/img') //carpeta donde se guarda
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) 
    }                                             //se agrega extension
  })
   
  var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', indexController.index);

router.get('/register', indexController.register)
router.post('/register', upload.any() , indexController.save)

router.get('/edit/:id', indexController.editview)
router.put('/edit/:id', indexController.edit)

router.get('/login', indexController.loginview)
router.post('/login', indexController.login)

module.exports = router;
