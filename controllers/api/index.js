const router = require("express").Router();
const userRoutes = require("./user_route.js");

router.use("/users", userRoutes);

module.exports = router;
