// const profileFormHandler = async (event) => {
//   event.preventDefault();

//   const userData = await User.findOne({ where: { id: req.session.user_id } });

//   if (tag && password) {
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ tag, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to log in");
//     }
//   }
// };

// document
//   .querySelector(".profile-form")
//   .addEventListener("submit", loginFormHandler);
$('.search-button').click(function(){
    $(this).parent().toggleClass('open');
  });