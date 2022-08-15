const router = require("express").Router();
const { rest } = require("lodash");
const { User, Match } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.json(match);
  } catch (error) {}
});

module.exports = router;
