let input1 = document.getElementById(`color1`);
let input2 = document.getElementById(`color2`);
let body = document.querySelector(`body`);
body.style.background =`linear-gradient(to right, ${input1.value},${input2.value}`;

body.addEventListener(`input`,function(event){
    let h3 = document.getElementById(`h3Value`);
    if(event.target.id===`color1`){
       body.style.background =`linear-gradient(to right, ${event.target.value},${input2.value}`;
       h3.innerHTML=body.style.background =`linear-gradient(to left, ${event.target.value},${input2.value}`;

    }else if(event.target.id===`color2`){
        body.style.background =`linear-gradient(to right, ${input1.value},${event.target.value}`;
        h3.innerHTML = body.style.background =`linear-gradient(to left, ${input1.value},${event.target.value}`
    }
})
