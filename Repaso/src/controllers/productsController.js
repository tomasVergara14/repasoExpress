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
    },
    
    sale: (req,res)=>{
        res.render('sale', {title:'Sale', style:'register'})
    },
    create:(req,res,next)=>{
        let productInfo = {
            //id:  falta agregar el id,
            name: req.body.name,
            precio: req.body.precio,
            category: "in-sale",
            description: req.body.description,
            discount: req.body.discount,
            avatar: req.files[0].filename
        }

        var newProducts;

        if(productsArchivo == ''){
            newProducts = []
        }
        else{
            newProducts = products
        }

        newProducts.push(productInfo)

        productsJson = JSON.stringify(newProducts)

        fs.writeFileSync('./products.json',productsJson)
        res.send(productsJson)
    }

}

module.exports = productsController;