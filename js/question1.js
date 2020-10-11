function checkForm() {
    if (document.forms["contactForm"]["lastName"].value.length < 5) {
        document.getElementById("lastNameError").style.display = "block";
    }
    else {
        document.getElementById("lastNameError").style.display = "none";
    }    
        return false;    
  }