const Item = require("../models/itemmodel.js");


let x = async () => {
    try {
        conversation = await Item.create({ itemName: "Latte", description: "Smooth espresso with steamed milk, creamy texture, subtle coffee flavor.", price: 10 });
        conversation2 = await Item.create({ itemName: "Black Coffee", description: "Bold, rich, bitter, aromatic, pure, invigorating, strong, simple, robust, classic.", price: 5 });
        conversation4 = await Item.create({ itemName: "Mocha", description: "Rich, chocolate-flavored coffee drink topped with steamed milk and foam.", price: 7 });
        conversation3 = await Item.create({ itemName: "Cappuccino", description: "Espresso with steamed milk and foam; rich, creamy, balanced, classic beverage.", price: 10 });
        console.log("itemadded")

    }

    catch (error) {
        console.log(error)
    }
}
module.exports = { x }
