const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services/index');

function signUp(request,response){
    const user = new User({
        email: request.body.email,
        displayName: request.body.displayName
    });

    user.save((err) => {
        if(err)
            response.status(500).send({message: `Error al crear el usuario:${err}`});
        return response.status(200).send({token: service.createToken(user)});
    });
}

function signIn(request, response){
    User.find({email:request.body.email}, (err,user) => {
        if(err)
            return response.status(500).send({message: `Error al crear el usuario controller:${err}`});
        if(!user)
            return response.status(404).send({message: `No existe el usuario`});
        request.user = user;
        request.status(200).send({
            message: 'Te has logueadso correctamente',
            token: service.createToken(user)
        });
    });
}

module.exports = {
    signUp,
    signIn
}