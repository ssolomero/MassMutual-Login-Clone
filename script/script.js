function showInputLabel() {
   var element = event.target;
   if (element.name === "email-input") {
     document.getElementById("email-label").style.visibility= "visible";
   } else if (element.name === "pass-input") {
     document.getElementById("password-label").style.visibility= "visible";
   }
   element.placeholder = "";
}

function togglePass() {
  var element = document.getElementById("login-password");
  if (element.type === "password") {
    element.type = "text";
  } else {
    element.type = "password";
  }
}

function toggleSSN() {
  var elements = document.getElementsByClassName("ssn-input");
  Array.prototype.forEach.call(elements, function(element) {
    if (element.type === "password") {
      element.type = "text";
    } else {
      element.type = "password";
    }
  });
}

// Auto Tab
$(".ssn-input").keyup(function () {
  if (this.value.length == this.maxLength) {
    var $next = $(this).next(".ssn-input");
    if ($next.length)
        $(this).next(".ssn-input").focus();
    else
        $(this).blur();
  }
});

