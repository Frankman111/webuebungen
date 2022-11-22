"use strict";
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increase(){
    count = count+1; //increases the count number every time the button is pressed
    countEl.textContent = count; //sets the counted number in the html file
}

function save(){
    let countStr = " " + count + " -"; //variable for better code
    saveEl.textContent += countStr; //sets the actual count in the <p> below
    /*console.log(count);*/
    countEl.textContent = 0; // is for resetting the text
    count = 0; // is for resetting the count variable
}





