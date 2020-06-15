const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcript = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = new Schema({
    //email: { type: String, unique: true, lowercase: true},
    email: { type: String, lowercase: true,require: true, index:true, unique:true,sparse:true},
    displayName: String,
    avatar: String,
    password: {type: String, select: false},
    signupdate: {type: Date, default: Date.now()},
    lasLogin: Date
});

// Antes que el modelo se cargue a la DB
/*UserSchema.pre('save', (next) => {
    let user = this;
    if(!user.isModified('password'))
        return next();

    bcript.genSalt(10, (err,salt) => {
        if(err)
            return next();
        bcript.hash(user.password, salt, null, (err, hash) => {
            if(err)
                return next();
            user.password = hash;
            next();
        });
    });

});*/

UserSchema.pre('save', function(next) {
    let user = this;
    if(!user.isModified('password'))
        return next();

    bcript.genSalt(10, function(err,salt) {
        if(err)
            return next();
        bcript.hash(user.password, salt, null, function(err, hash) {
            if(err)
                return next();
            user.password = hash;
            next();
        });
    });
    
});

UserSchema.method.gravatar = function(){
    if(!this.email)
        return `https://gravatar.com/avatar/?s=200&d=retro`;
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');

    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`;
}

module.exports = mongoose.model('User',UserSchema);