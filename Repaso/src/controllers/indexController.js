const hobbies = ['patinar','jugar','apuestas','programar','cucharear']
const indexController = {

    index: (req,res)=>{
        res.render('index', { title: 'Repaso', style:'style', hobbies: hobbies })
    },
    register:(req,res)=>{
        res.render('register', {title:'Register', style:'register'})
    },
    login:(req,res)=>{
        res.render('login',{style:'login', title:'Login'})
    }
}

module.exports= indexController;