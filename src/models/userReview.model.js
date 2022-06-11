const mongoose = require("mongoose")

const userReviewSchema = new mongoose.Schema(
    {
        userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product",
            required: true,
        },
        review: { type: String, required: false },
        rating: { type: Number, required: false },
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

const Userreview = mongoose.model("userreview", userReviewSchema);

module.exports = Userreview