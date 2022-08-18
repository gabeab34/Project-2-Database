const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ["password"] },
    //   order: [["name", "ASC"]],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      // users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/signup", (req, res) => {
  User.create({
    name: req.body.name,
    tag: req.body.tag,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newUser) => {
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        res.json({ user: newUser, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
