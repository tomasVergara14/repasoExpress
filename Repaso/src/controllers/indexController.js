const fs = require('fs');

const hobbies = ['patinar','jugar','apuestas','programar','cucharear']


const indexController = {

    index: (req,res)=>{
        res.render('index', { title: 'Repaso', style:'style', hobbies: hobbies })
    },
    register:(req,res)=>{
        res.render('register', {title:'Register', style:'register'})
    },
    loginview:(req,res)=>{
        res.render('login',{style:'login', title:'Login'})
    },
    save:(req,res)=>{
        let info = {
            name: req.body.name,
            lastname: req.body.lastname,
            dni: req.body.dni,
            mail:req.body.mail,
            pass: req.body.pass
        }

        //Volverla json

        let archivoUsuarios = fs.readFileSync('usuariosInfo.json', {encoding:'utf-8'})
        let usuarios = [];

        if(archivoUsuarios ==''){
             usuarios = []
        }else{
            let usuarios = JSON.parse(archivoUsuarios)
        };

        usuarios.push(info);


         usuariosJson = JSON.stringify(usuarios);

        fs.appendFileSync('usuariosInfo.json', usuariosJson)

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

    },
    login:(req,res)=>{
        
        let info = req.body
        res.send(info)

    }
}

module.exports= indexController;