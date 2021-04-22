const registerController = {
    register: (req,res,next)=>{
        res.render('register', {title: 'Register', style: 'register'})
    },
    detail:(req,res)=>{
        res.send("bienvenidos al detalle del producto " + req.params.id)
    }
}

module.exports = registerController;