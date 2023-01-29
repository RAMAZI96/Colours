'use strict';
const ferebi=["red", "blue", "black", "white"];
let is=Math.floor(Math.random()* ferebi.length);
document.querySelector(".botton").onclick=function(){
 var is=getnumber();

document.body.style.backgroundColor=ferebi[is];
document.querySelector(".feri").textContent=ferebi[is];



}
function getnumber(){
    return Math.floor(Math.random()* ferebi.length);
 
 }
 