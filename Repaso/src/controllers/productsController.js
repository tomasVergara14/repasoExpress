const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path')

const productsController = {

    list : (req,res)=>{

        let productsArchivo = fs.readFileSync('./products.json', {encoding:'utf-8'})
        let products = JSON.parse(productsArchivo);
        let productsVisited = products.filter((product)=> product.category == "visited" )
        let productsOffers = products.filter((product)=> product.category == "in-sale" )


        res.render('products', {style:'style', title:'Products', products:products })
    },
    detail:(req,res)=>{
        
        let productsArchivo = fs.readFileSync('./products.json', {encoding:'utf-8'})
        let products = JSON.parse(productsArchivo);
        let product = products.filter((producto)=> producto.id == req.params.id)

        console.log(product)
        res.render('detail', {style:'style', title:'Detail', product:product})
    }

}

module.exports = productsController;