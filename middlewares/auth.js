
const services = require('../services');

function isAuth(request, response, next){
    
    console.log("Entro a: function isAuth(request, respose, next)");
    if(!request.headers.authorization)
        return response.status(403).send({message: `No tienes autorización.`});
    
    const token =  request.headers.authorization.split(' ')[1];
    console.log(`El token es: ${token}`);
    services.decodeToken(token)
        .then(response =>{
            request.user = response
            next();
        })
        .catch(response => {
            response.status(response.status);
        });
}

module.exports = isAuth;