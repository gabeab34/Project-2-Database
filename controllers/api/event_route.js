const router = require("express").Router();
const { User, Event } = require("../../models");
const { rest } = require("lodash");

router.post("/eventscript", (req, res) => {
  Event.create({
    tournament: req.body.tournament,
    standings: req.body.standings,
    character: req.body.character,
    user_id: req.session.user_id,
  })
    .then((newEvent) => {
      res.json({ event: newEvent, message: "got your info" });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
