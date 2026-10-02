let btn = document.querySelector(`button`);
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  enterInput()
});

input.addEventListener("keydown", function (event) {
if(event.key===`Enter`){
    enterInput()
}

});

function enterInput(){
if (input.value !== "") {
    let li = document.createElement("li");
    let innerContent = document.createTextNode(input.value);
    li.appendChild(innerContent);
    ul.appendChild(li);
    input.value = "";
  }
}



