const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path')


let productsArchivo = fs.readFileSync('./products.json', {encoding:'utf-8'})
let products = JSON.parse(productsArchivo);



const productsController = {

    list : (req,res)=>{

        res.render('products', {style:'style', title:'Products', products:products })
    },

    detail:(req,res)=>{
        
        const productId = products.find((product) => product.id == req.params.id)

        console.log(productId)
        res.render('detail', {style:'detail', title:'Detail', productId:productId})
    }

}

module.exports = productsController;