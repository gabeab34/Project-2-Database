const router = require("express").Router();
const { User, Event } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      // order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const userProfile = await User.findOne({
      where: { id: req.session.user_id },
      include: [{ model: Event }],
    });
    uName = userProfile.name;
    uTag = userProfile.tag;
    uEmail = userProfile.email;
    uPhone = userProfile.phone;
    uRegion = userProfile.region;
    uEvent = userProfile.Events;
    res.render("profile", {
      uName,
      uTag,
      uEmail,
      uPhone,
      uRegion,
      uEvent,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/event", (req, res) => {
  res.render("event");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
