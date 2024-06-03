const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
// const authRoutes = require("./routes/auth.route.js");
// const messageRoutes = require("./routes/message.route.js");
// const userRoutes = require("./routes/user.route.js");
const { connectToMongoDb } = require("./utils/connectMongo.js");
const path = require('path')

dotenv.config()
const port = process.env.PORT;
const app = express()

app.use(express.json())
app.use(cookieParser())

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.use(express.static(path.join(_dirname, "/frontend/dist")))

// app.get("*", (req, res) => {
//     res.sendFile(_dirname, "frontend", "dist", "index.html")
// })

app.listen(port, () => {
    connectToMongoDb();
    console.log(`server running at port ${port}`);
});

