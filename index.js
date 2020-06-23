function showInputLabel() {
   var element = event.target;
   if (element.placeholder === "Email") {
     document.getElementById("email-label").style.visibility= "visible";
   } else if (element.placeholder === "Password") {
     document.getElementById("password-label").style.visibility= "visible";
   }
   element.placeholder = "";
}

//Label animation
// Start with low margin when inactive
// Move label up when active

 // document.getElementById("fname").addEventListener("focusout", myFunction);
