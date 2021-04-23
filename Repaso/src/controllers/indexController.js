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
    },
    save:(req,res)=>{
        let info = req.body
        res.send(info)
    },
    editview:(req,res)=>{

        
        //  Saber que usuario se modifica
        let idUser = req.params.id //el id, es lo que use en la ruta parametrizada

        res.render('editUser', {title:'Edit', style:'register', idUser:idUser})
    },
    edit:(req,res)=>{

        //  Saber que usuario se modifica
        let idUser = req.params.id //el id, es lo que use en la ruta parametrizada
        res.send(idUser)

    }
}

module.exports= indexController;