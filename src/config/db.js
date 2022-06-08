const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/crud-ecommerce");
}

module.exports = connect;