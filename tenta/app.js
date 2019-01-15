// JavaScript eller jQuery

var a = document.createElement("button");
a.textContent = "Log in:";
document.body.appendChild(a);

a.addEventListener('click', function() {
  var box = document.createElement("div");
	box.style.height = "150px";
	box.style.width = "300px";
  box.style.backgroundColor = "rgb(185, 185, 185)";
  box.style.textAlign = "center";
  box.style.padding = "10px";
  document.body.appendChild(box);

  var rubrik = document.createElement("p");
  rubrik.textContent = "Log in:";
  rubrik.style.marginBottom = "40px";
  rubrik.style.fontSize = "20px";
  box.appendChild(rubrik);

  var email = document.createElement("input");
  email.setAttribute("type", "text", "id", "email");
  email.style.width = "290px";
  box.appendChild(email);

  var passW = document.createElement("input");
  passW.setAttribute("type", "password", "id", "passW");
  passW.style.width = "290px";
  box.appendChild(passW);

  var submit = document.createElement("button");
  submit.textContent = "Logga in";
  submit.style.width = "298px";
  submit.style.marginTop = "5px";
  box.appendChild(submit);

  submit.addEventListener('click', function() {
    var username = document.getElementsByTagName("input")[0].value;;
    var password = document.getElementsByTagName("input")[1].value;;
    var un = "Steve";
    var pw = "123";
    if (username == un && password == pw)
    alert("Välkommen");
    else {
      alert("Du har skrivit in fel användarnamn eller lösenord!");
    }
  });
});
