const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order",
                default: [],
            },
        ],

    },
);

const User = mongoose.model("User", userSchema);
module.exports = User;