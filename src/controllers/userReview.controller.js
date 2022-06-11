const express = require("express");
const router = express.Router();
const Userreview = require("../models/userReview.model");

//get all reviews
router.get("/", async (req, res) => {
  try {
    const review = await Userreview.find().lean().exec();
    return res.status(200).send({review:review});
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

//get review by id
router.get("/:id", async (req, res) => {
  try {
    const review = await Userreview.findById(req.params.id).lean().exec();
    return res.status(200).send({ review:review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

// post review 
router.post("/", async (req, res) => {
  try {
    const review = await Userreview.create(req.body);
    return res.status(201).send({ review:review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

//delete review
router.delete("/:id", async (req, res) => {
  try {
    const review = await Userreview.findByIdAndDelete(req.params.id);
    return res.status(204).send({review:review });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});


module.exports = router;