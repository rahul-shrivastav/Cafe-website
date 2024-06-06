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


app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/items", itemRoutes);

// app.use(express.static(path.join(_dirname, "/frontend/dist")))

// app.get("*", (req, res) => {
//     res.sendFile(_dirname, "frontend", "dist", "index.html")
// })

app.listen(port, () => {
    console.log(`server running at port ${port}`);
    connectToMongoDb();
});

