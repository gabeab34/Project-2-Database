const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value;
  const tag = document.querySelector("#tag-signup").value;
  // const email = document.querySelector("#email-signup").value;
  const password = document.querySelector("#password-signup").value;

  if (name && tag && password) {
    const response = await fetch("api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, tag, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
