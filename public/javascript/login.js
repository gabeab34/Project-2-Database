const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const tag = document.querySelector("#tag-login").value;
  const password = document.querySelector("#password-login").value;

  if (tag && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ tag, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
