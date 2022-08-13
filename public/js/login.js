const loginFormHandler = async (event) => {
  event.preventDefault();

  const tag = document.querySelector("#tag-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (tag && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ tag, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
