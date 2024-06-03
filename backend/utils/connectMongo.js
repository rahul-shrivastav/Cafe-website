const mongoose = require('mongoose');

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.mongo_db_uri);
        console.log("connected to DB");

    } catch (error) {
        console.log("connection to DB failed", error);
    }
}
module.exports = { connectToMongoDb };