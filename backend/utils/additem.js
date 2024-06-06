const Item = require("../models/itemmodel.js");


let x = async () => {
    try {
        conversation = await Item.create({ itemName: "Frappe", description: "Iced, frothy instant coffee blended to perfection.", price: 11 });
        conversation2 = await Item.create({ itemName: "Cold Brew", description: "Smooth, refreshing coffee made by steeping grounds in cold water.", price: 7 });
        // conversation4 = await Item.create({ itemName: "Mocha", description: "Rich, chocolate-flavored coffee drink topped with steamed milk and foam.", price: 7 });
        // conversation3 = await Item.create({ itemName: "Cappuccino", description: "Espresso with steamed milk and foam; rich, creamy, balanced, classic beverage.", price: 10 });
        console.log("itemadded")

    }

    catch (error) {
        console.log(error)
    }
}
module.exports = { x }
