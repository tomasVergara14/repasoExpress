const hobbies = ['patinar','jugar','apuestas','programar','cucharear']

const userController = {

    

    user:(req,res,next)=>{
        
            res.render('index', {hobbiesList: hobbies, style: 'style'});
          
    }

}

module.exports = userController;
