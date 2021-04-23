const productsController = {
    list : (req,res)=>{
        res.render('products', {style:'style', title:'Products'})
    },
    detail:(req,res)=>{
        res.render('detail', {style:'style', title:'Detail'})
    }

}

module.exports = productsController;