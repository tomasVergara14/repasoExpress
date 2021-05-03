var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')
var multer = require('multer')
var path = require('path');
const { Router } = require('express');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/img/products') //carpeta donde se guarda
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) 
    }                                             //se agrega extension
  })
   
  var upload = multer({ storage: storage })


router.get('/', productsController.list)
router.get('/detail/:id', productsController.detail)

router.get('/sale', productsController.sale)
router.post('/sale', upload.any() , productsController.create)

router.get('/edit/:id', productsController.editView)
router.put('/edit/:id', upload.any(),  productsController.editProduct)
router.delete('/eliminate/:id', productsController.delete)


module.exports = router;