const colors=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
console.log("random color is selected");
let hexColor="#";
for(let i=0;i<6;i++){
    hexColor+=colors[getrandomNumber()];
}
color.textContent=hexColor;
document.body.style.backgroundColor=hexColor;
});

function getrandomNumber(){
    return Math.floor(Math.random()*colors.length);
}