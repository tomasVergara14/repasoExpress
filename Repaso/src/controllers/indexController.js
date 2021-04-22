const hobbies = ['patinar','jugar','apuestas','programar','cucharear']
const indexController = {

    index: (req,res)=>{
        res.render('index', { title: 'Repaso', style:'style', hobbies: hobbies })
    }
}

module.exports= indexController;