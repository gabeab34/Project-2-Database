const router = require("express").Router();
const { rest } = require("lodash");
const { User, Event } = require("../../models");


router.post("/", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {}
});

module.exports = router;