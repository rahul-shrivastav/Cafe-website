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

module.exports = { getallitems }