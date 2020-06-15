const mongoose = require('mongoose');
const config = require('../config'); 
mongoose.connect(config.db, {useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false,useCreateIndex: true,
    useNewUrlParser: true}, (err, db) => {
    if(err) {
       console.log(err);
       process.exit(0);
    }
    console.log('database connected!');
    //db.close();
});