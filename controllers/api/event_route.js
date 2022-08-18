const router = require("express").Router();
const { User, Event } = require("../../models");
const { rest } = require("lodash");

// router.post("/", async (req, res) => {
//   try {
//     const event = await Event.create(req.body);
//     res.json(event);
//   } catch (error) {}
// });


router.post("/eventscript", (req, res) => {
  Event.create({
    tournament: req.body.tournament,
    standings: req.body.standings,
    character: req.body.character,
    biography: req.body.biography,
  })
    .then((newEvent) => {
      req.session.save(() => {
        req.session.user_id = newEvent.id;
        req.session.logged_in = true;
      });
      res.json({ event: newEvent, message: "got your info" });;
    
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;