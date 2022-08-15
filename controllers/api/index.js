const router = require("express").Router();
const userRoutes = require("./user_route.js");
// const eventRoutes = require("./event_route.js");
const match_routes = require("./match_route.js");

router.use("/users", userRoutes);
router.use("/match", match_routes);

module.exports = router;
