const colors=["green","red","rgba(133,122,200)","#f15025"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
console.log("random color is selected");
let randomcolor=Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor=colors[randomcolor];
color.textContent=colors[randomcolor];
});