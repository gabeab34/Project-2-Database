const signupFormHandler = async (event) => {
  router.get("/signup", (req, res) => {
    res.render("signup");
  });
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
