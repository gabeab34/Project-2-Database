const router = require("express").Router();
const userRoutes = require("./user_route.js");
const eventRoutes = require("./event_route");

router.use("/users", userRoutes);

module.exports = router;
