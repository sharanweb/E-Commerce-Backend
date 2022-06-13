const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
    {
        userId : {type:String,required:true},
        products:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true,
            },
        ] 
    }
);

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;