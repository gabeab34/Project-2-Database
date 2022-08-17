const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { tag: req.body.tag } });

    if (!userData) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(404).json({ message: "Invalid password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
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
      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.logged_in = true;
      //   res.json({ user: userData, message: "You are now logged in!" });
      // });
      res.json(newUser);
      return newUser;
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
