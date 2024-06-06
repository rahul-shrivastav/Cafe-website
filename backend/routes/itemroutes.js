const express = require('express');
const router = express.Router();
const { getallitems } = require('../controllers/itemcontroller.js');
const protectRoute = require('../middleware/protectRoute.js');

router.get("/all", protectRoute, getallitems);
// router.get("/:id", );

module.exports = router;