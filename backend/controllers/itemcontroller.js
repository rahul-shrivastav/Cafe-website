const Item = require("../models/itemmodel");

const getallitems = async (req, res) => {
    try {
        items = await Item.find({});

        res.json(items)

    }
    catch (error) {
        console.log(error)
    }
};
const getoneitem = async (req, res) => {
    try {
        items = await Item.find({ _id: req.params.id });

        res.json(items)
    }
    catch (error) {
        console.log(error)
    }
};

module.exports = { getallitems, getoneitem }