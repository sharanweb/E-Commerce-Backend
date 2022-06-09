const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sharnu:sharnu@cluster0.hkmba.mongodb.net/test");
}

module.exports = connect;