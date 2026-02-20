
/*

const title = document.querySelector(".title");
const originalText = title.innerHTML;   
title.innerHTML = "";                  

let index = 0;

function typeEffect() {
    if (index < originalText.length) {
        title.innerHTML += originalText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();



const headings = document.querySelectorAll(".hero-content h1");
const body = document.querySelectorAll("body");

 
 
headings.forEach((heading, index) => {
    
  setTimeout(() => {
    heading.classList.add("active");
  }, index * 1500); 
});
*/

 const words = [" Video Editing |", "Posters |", "Reels |", "Social Media |", "Social Media Management"];
 const colors = ["#00ffee", "#d0ff00", "#ffd900", "#ff0059", "#00a6ff"];
 const fonts = ["Arial", "Georgia", "Courier New", "Verdana", "Tahoma"];
 
const styles = ["normal", "italic", "normal", "italic", "normal"];


let index = 0;
const text = document.getElementById("text");

function changeWord() {
    text.textContent = words[index];
    text.style.color = colors[index];
    text.style.fontFamily = fonts[index];
    text.style.fontStyle = styles[index];
     
    index++;

    if (index === words.length) {
        index = 0;  
    }
}

setInterval(changeWord,2000); 





const Ny = document.querySelector(".year");

Ny.textContent = new Date().getFullYear();