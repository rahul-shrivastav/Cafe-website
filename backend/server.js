const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth.route.js");
const orderRoutes = require("./routes/orderroute.js");
const itemRoutes = require("./routes/itemroutes.js");
const { connectToMongoDb } = require("./utils/connectMongo.js");
const path = require('path')
const cors = require("cors");

dotenv.config()
const port = process.env.PORT;
const app = express()
const dirname = path.resolve();


app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(dirname, "/..", "/frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/items", itemRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(dirname, "/..", "/frontend/dist/index.html"));
});


console.log((dirname))


app.listen(port, () => {
    console.log(`server running at port ${port}`);
    connectToMongoDb();
});

