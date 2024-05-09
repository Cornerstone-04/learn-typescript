"use strict";
// Tyep assertion
// convert to more or less specific
let a = "Hello";
let b = a; //assign a less specific type
let c = a; //more specific
let d = "World";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return " " + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// TS doesn't see the problem
let nextVal = addOrConcat(2, 2, "concat");
console.log(myVal, nextVal);
//The DOM
const img = document.querySelector("img");
// const myImg = document.getElementById("#img")! non null assertion;
const myImg = document.getElementById("#img");
img.src;
