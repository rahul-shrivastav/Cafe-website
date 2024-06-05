const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        itemid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
        },
        quantity: {
            type: Number,
            required: true
        }
    },
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;