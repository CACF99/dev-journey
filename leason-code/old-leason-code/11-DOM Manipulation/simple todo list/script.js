var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let list = document.getElementsByTagName(`li`);
function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  let deleteButton = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  deleteButton.appendChild(document.createTextNode(`Delete`));
   li.appendChild(deleteButton);
   deleteButton.classList.add(`deleted`)
  ul.appendChild(li);
 
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
	
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
	
  }
}

ul.addEventListener(`click`,function(event){ //turns out you can add an eventListner to the parant Element, in this case the ul instead of each il, so when anything inside the ul is clicked, i can see which one using event propertey, and .target tells you which element insde the ul was clicked, and .tagname will tell you whats the tag of the element so i if theres a button inside the ul or didnt click on whitespace inside the ul, i dont toggle it with the done class
	let itemClicked = event.target;
	if(itemClicked.tagName===`LI`){
		itemClicked.classList.toggle(`done`)
	}else if(itemClicked.className===`deleted`){
		  event.target.parentElement.remove()
	}
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


