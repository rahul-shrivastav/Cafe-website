const Order = require("../models/ordermodel.js");
const User = require("../models/usermodel.js");

const postorder = async (req, res) => {
    try {
        neworder = await Order.create({
            itemid: req.params.id,
            quantity: req.params.quantity
        });
        console.log(neworder._id)
        const userid = req.body.id;
        const user = await User.findOne({ _id: userid });
        user.orders.push(neworder._id)
        await user.save()

    }
    catch (error) {
        console.log(error)
    }
};

module.exports = { postorder }