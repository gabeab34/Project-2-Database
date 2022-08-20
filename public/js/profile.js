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




    const form = document.getElementById("profileInput");
    const profileBtn = document.getElementById("profileBtn");
    const profileSocials = document.getElementById("profileSocials").value;
    const profileSponsors = document.getElementById("profileSponsors").value;
    const profilePlatform = document.getElementById("profilePlatform").value;
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    

    localStorage.setItem('form', JSON.stringify(itemsArray))
    const data = [JSON.parse(localStorage.getItem('form'))]

     form.addEventListener('submit', function(e){
         e.preventDefault();

        itemsArray.push(profileSocials, profilePlatform, profileSponsors, JSON.stringify(itemsArray))
        
     });
     





    // function saveData()
    // {
    // let pSocial,pSponsors,pPlatform;
    // pSocial=document.getElementById("profileSocials").value;
    // pSponsors=document.getElementById("profileSponsors").value;
    
    // pPlatform=document.getElementById("profilePlatform").value;
    
    // localStorage.setItem("Socials", pSocial)
    // localStorage.setItem("Sponsors", pSponsors)
    // localStorage.setItem("Platform",pPlatform)
    // }


    // const populateForm = () => {
    //     if (localStorage.key(formIdentifier)) {
    //       const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    //       for (const element of formElements) {
    //         if (element.name in savedData) {
    //           element.value = savedData[element.name];
    //         }
    //       }
    //       const message = "Form has been refilled with saved data!";
    //       displayAlert(message);
    //     }
    //   };
    //   document.onload = populateForm(); // populate the form when the document is loaded