function videoFunction() {
  document.getElementById("myComment").innerHTML += " A great vacation video";
}

function emailMessage() {
  document.getElementById("emailBox").innerHTML +=
    "Please enter a valid email address";
}

function blankMessage(params) {
  document.getElementById("emailBox").innerHTML = "Email: ";
}
