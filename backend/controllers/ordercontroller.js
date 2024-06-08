const Order = require("../models/ordermodel.js");
const User = require("../models/usermodel.js");

const postorder = async (req, res) => {
    try {
        neworder = await Order.create({
            itemid: req.params.itemid,
            quantity: req.params.quantity
        });
        const userid = req.params.userid;
        const user = await User.findOne({ _id: userid });
        user.orders.push(neworder._id)
        await user.save()

    }
    catch (error) {
        console.log(error)
    }
};



const getorders = async (req, res) => {
    details = []
    try {
        let user = await User.find({
            _id: req.params.userid
        });
        const orders = user[0].orders

        for (i of orders) {
            let order = await Order.find({ _id: i })
            details.push(order[0])
        }
    }
    catch (error) {
        console.log(error)
    }
    res.json(details)
};

module.exports = { postorder, getorders }