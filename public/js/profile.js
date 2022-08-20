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
const profileeBtn = document.getElementById("profileBtn");
// let pSocials = document.getElementById("profileSocials").value;
// let pSponsors = document.getElementById("profileSponsors").value;
// let pPlatform = document.getElementById("profilePlatform").value;
const formHolder = JSON.parse(localStorage.getItem("formHolder")) || [];

//loadForm();

form.addEventListener("submit", e=> {
    e.preventDefault();
var pSocials = document.getElementById("profileSocials").value;
var pSponsors = document.getElementById("profileSponsors").value;
var pPlatform = document.getElementById("profilePlatform").value;

var Socials = localStorage.setItem ("socials", pSocials);
var Sponsors = localStorage.setItem ("sponsors", pSponsors);
var Platform = localStorage.setItem ("platform", pPlatform);

Socials = localStorage.getItem ("socials");
Sponsors = localStorage.getItem ("sponsors");
Platform = localStorage.getItem ("platform");

formHolder.push(Socials, Sponsors, Platform);
//formHolder.push(formData.value);
localStorage.setItem("formHOlder", JSON.stringify(formHolder));
});

function loadForm(){
    var formParse = JSON.parce(localStorage.getItem(formHolder));
    var formID;
        var formValue;
        var formType;

        $.each(formParse, function (key, value){
                    formID = key;
                    formValue =value; 
            
                    if (formValue === "true" || formValue === "false"){
                        formType = formValue;
                    }
                });
                $.formfield.each(function(){
                    formID = this.id;
                    document.getElementById(formID);

                    if (formType === "true") {
                        $(formID).val;
                    }else $(formID).val(formValue);})               
                
};

// function loadForm() {
//     var formParse = JSON.parce(localStorage.getItem('socials', 'sponsors', 'platform'));
//     
//  
// }



 

  




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
