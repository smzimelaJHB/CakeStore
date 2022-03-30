let pass1 = document.querySelector(".pw1");
let pass2 = document.querySelector(".pw2");

let reset = document.querySelector("button");

reset.addEventListener("click",()=> {
    if(pass1 != pass2)
        alert("Password does not match");
    else
        alert("Password Changed");
  });