const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path')



const indexController = {

    index: (req,res)=>{

        let productsData = fs.readFileSync('./products.json', {encoding:'utf-8'})
        let products = JSON.parse(productsData)
        let productsVisited = products.filter((product)=> product.category == "visited" )
        let productsOffers = products.filter((product)=> product.category == "in-sale" )

        res.render('index', { title: 'Repaso', style:'style', productsVisited: productsVisited, productsOffers: productsOffers })
    },
    register:(req,res)=>{
        res.render('register', {title:'Register', style:'register'})
    },
    loginview:(req,res)=>{
        res.render('login',{style:'login', title:'Login'})
    },
    save:(req,res, next)=>{
        //agregar el next para multer y middlewares
        let info = {
            name: req.body.name,
            lastname: req.body.lastname,
            dni: req.body.dni,
            mail:req.body.mail,
            pass: bcrypt.hashSync(req.body.pass, 12), //Para encriptar la contraseña
                                    //para leerla y compararla es bcrypt.compareSync(textoPlano, hash)
            avatar: req.files[0].filename       //en la propiedad files en el primer archivo
                                                //subido [0] con el nombre filename     
        }

        //Leer nuestro archivo para ver si habia usuarios registrados

        let archivoUsuarios = fs.readFileSync('usuariosInfo.json', {encoding:'utf-8'})
        
        //Declaro la variable por fuera por el scope
        
        var usuarios ; 

        //Reviso si el archivo esta vacio declaro que va a ser un array

        if(archivoUsuarios ==''){
            usuarios = []
        }else{

            //En caso de haber algo descomprimo lo que hay y lo vuelvo un objeto para trabajar
            usuarios = JSON.parse(archivoUsuarios)
        };

        //Una vez que tenemos el archivo de usuario hecho objeto, le agregamos la info nueva para actualizarlo

        usuarios.push(info);

        //Lo volvemos un JSON nuevamente para que podamos escribirlo con writeFileSync

        usuariosJson = JSON.stringify(usuarios);

        //Lo escribimos en el archivo que definamos donde vamos a guardar los usuarios

        fs.writeFileSync('usuariosInfo.json', usuariosJson)

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

        var info={
            mail: req.body.mail,
            pass: req.body.pass
        }
        
        //Leo el archivo en busca de si hay usuarios
        let archivoUsuarios = fs.readFileSync('usuariosInfo.json', {encoding:'utf-8'})
        
        //declaro la variable por el scope
        var usuarios;
        if(archivoUsuarios == ""){
            usuarios = []   //si esta vacio declaro que es un array
        }else{
            usuarios = JSON.parse(archivoUsuarios); //si tiene contenido lo descomprimo en un array
        }

        //Recorro el array de usuarios 

        usuarios.forEach(usuario=>{
            //Comparo si los datos del formulario son iguales a los almacenados en el JSON
            if(info.mail == usuario.mail && bcrypt.compareSync(info.pass, usuario.pass ) ){
                res.render('index', { title: 'Repaso', style:'style', hobbies: hobbies })
            }
            else{
                res.render('error', { title: 'Repaso', style:'style', hobbies: hobbies })
            }
        })
        
        // for( let i = 0; i < usuarios.length ; i++ ){

        //     

        //     if(info.mail == usuarios[i].mail && bcrypt.compareSync(info.pass, usuarios[i].pass )){
                
        //         res.render('index', { title: 'Repaso', style:'style', hobbies: hobbies })
        //     }
        //     res.send('error')            
        // }
    }
}

module.exports= indexController;