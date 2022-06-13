const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model");
const User = require("../models/user.model");



router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    return res.status(200).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
// router.get("/usercart", async (req, res) => {
//   try {
//     let user_id = req.query.user_id;
//     const cart = await Cart.find({user_id: { $eq: user_id}}).populate("products").lean().exec();
//     const sum = await Cart.aggregate([
//         { "$unwind": "$products"},
//         {$group:{_id:"$user_id",
//     "Total":{$sum:"$products.price"}}}
//         ]);
//     return res.status(200).send({ Cart: cart,sum });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// });


router.get("/usercart", async (req, res) => {
    try {
      let myuser_id = req.query.myuser_id;
      const cart = await Cart.find({user_id: { $eq: myuser_id}}).populate("products").lean().exec();
      const sum = await Cart.aggregate([
          { "$project": {
             user_id: myuser_id,
             "TotalPrice": {
                $sum: "$products.price"
                }
             }}
          ]);
      return res.status(200).send({ Cart: cart,sum });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
});

router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body,);
    return res.status(203).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.status(204).send({ Cart: cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = router