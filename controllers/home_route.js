const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/", async (req, res) => {
//   res.render("firstvisit");
// });

// Prevent non logged in users from viewing the homepage
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("homepage", {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("homepage");
    return;
  }
  res.render("firstvisit");
});

// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;

// {/* <div class="uk-text-center">
// <button type="submit" class="uk-button uk-button-default uk-margin-medium-top">Log
// in</button>
// <br>
// <a href="/sign-up" class="uk-link" id="signUpLink">Sign up now!</a>
// </div> */}
