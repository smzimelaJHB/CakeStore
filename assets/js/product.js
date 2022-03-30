/* make the button call the function */
let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let cartItems  = document.querySelector(".btn-b");
var classN = 0;

const originalPrice =  document.querySelector(".rands").innerHTML;
var cartCount = document.querySelector(".cart").innerHTML;

plusButton.addEventListener("click",()=> {
  let input = document.querySelector("#qty");
  input.stepUp();
  document.querySelector(".rands").innerHTML = parseFloat(originalPrice * input.value).toFixed(2);
});

function steponup(){
  let input = document.querySelector("#qty");
  input.stepUp();
}
function stepondown(){
  let input = document.querySelector("#qty");
  input.stepDown();
}


minusButton.addEventListener("click",()=> {
  let input = document.querySelector("#qty");
  input.stepDown();
  document.querySelector(".rands").innerHTML = parseFloat(originalPrice * input.value).toFixed(2);
  console.log(cartCount)
});

cartItems.addEventListener("click",()=> {
  cartCount = parseInt(cartCount) + 1;
  document.querySelector(".cart").innerHTML = cartCount;
  addingItems();
});

function addingItems(){
          //create div element
          const newDiv = document.createElement("div");
          //append it to existing elems class
          const currentDiv = document.querySelector(".elems");
          currentDiv.appendChild(newDiv);
          //give newly created class a name
          newDiv.className = `class${classN}`;
          //create anchor element and give it some content
          const span = document.createElement("span");
          span.innerHTML = "Hello world"
          //append anchor element into newly created div
          const currentDiv2 = document.querySelector(`.class${classN}`);
          currentDiv2.appendChild(span);
          //create new element for button and give it content
          const removeButton = document.createElement("BUTTON");
          removeButton.innerHTML = "remove";

          //append button into newly created div 
          currentDiv2.appendChild(removeButton);
          //give button a class name
          removeButton.className = `btn btn-primary remove-btn`;

          //style remove button
          document.querySelector(`a`).style.colour = "red";

          //increment class number
          classN = classN + 1;
          
}




