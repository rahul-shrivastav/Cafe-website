const express = require('express');
const router = express.Router();
const { postorder } = require('../controllers/ordercontroller.js');
const protectRoute = require('../middleware/protectRoute.js');

router.post("/post/:id/:quantity", protectRoute, postorder);
// router.get("/get/:id", login);

module.exports = router;