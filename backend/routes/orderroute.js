const express = require('express');
const router = express.Router();
const { postorder, getorders } = require('../controllers/ordercontroller.js');
const protectRoute = require('../middleware/protectRoute.js');

router.post("/post/:itemid/:quantity", protectRoute, postorder);
router.get("/get/:userid", protectRoute, getorders);

module.exports = router; 