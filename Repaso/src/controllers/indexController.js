const hobbies = ['patinar','jugar','apuestas','programar','cucharear']
const indexController = {

    index: (req,res)=>{
        res.render('index', { title: 'Repaso', style:'style', hobbies: hobbies })
    },
    register:(req,res)=>{
        res.render('register', {title:'Register', style:'register'})
    }
}

module.exports= indexController;