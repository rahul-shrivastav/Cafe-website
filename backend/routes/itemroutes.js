const express = require('express');
const router = express.Router();
const { getallitems, getoneitem } = require('../controllers/itemcontroller.js');
const protectRoute = require('../middleware/protectRoute.js');

router.get("/all", protectRoute, getallitems);
router.get("/:id", protectRoute, getoneitem);

module.exports = router;