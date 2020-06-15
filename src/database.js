const mongoose = require('mongoose');
var mongooseConnection;
const url = 'mongodb://localhost:27017/shop';

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true}, (err, db) => {
    if(err) {
       console.log(err);
       process.exit(0);
    }
    console.log('database connected!');
    //db.close();
});