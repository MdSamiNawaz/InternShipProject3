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
 

*/


const headings = document.querySelectorAll(".hero-content h1");
const body = document.querySelectorAll("body");

 
 
headings.forEach((heading, index) => {
    
  setTimeout(() => {
    heading.classList.add("active");
  }, index * 1500); 
});


