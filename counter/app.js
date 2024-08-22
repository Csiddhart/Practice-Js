let value=0;

const increase=document.getElementById("inc");
const reset=document.getElementById("res");
const decrement=document.getElementById("dec");
const display = document.getElementById("value");

increase.addEventListener("click",()=>{
value++;
display.textContent=value;
});


decrement.addEventListener("click",()=>{
value--;
display.textContent=value;
});

reset.addEventListener("click",()=>{
value=0;
display.textContent=value;
});