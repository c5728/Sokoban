'use strict';
window.addEventListener('load', () => {
console.log("index.js loaded");

let h1 = document.createElement('h1');
let msg = document.createTextNode('H1111');

h1.appendChild(msg);

document.body.appendChild(h1);

let h2 = document.createElement('h2');
let msg2 = document.createTextNode('H222');

h2.appendChild(msg2);

document.body.appendChild(h2);


let h3 = document.createElement('h3');
let msg3 = document.createTextNode('H33');

h3.appendChild(msg3);

document.body.appendChild(h3);

let h4 = document.createElement('h1');
let msg4 = document.createTextNode('H4');

h4.appendChild(msg4);

document.body.appendChild(h4);


});
