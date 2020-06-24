function showInputLabel() {
   var element = event.target;
   if (element.placeholder === "Email") {
     document.getElementById("email-label").style.visibility= "visible";
   } else if (element.placeholder === "Password") {
     document.getElementById("password-label").style.visibility= "visible";
   }
   element.placeholder = "";
}
