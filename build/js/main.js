"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("okay");
guitars.unshift("true");
console.log(stringArr, guitars);
//Tuple
let myTuple = ["Dave", 42, true];
//Objects
let exampleObj = {
    prop1: "Dave",
    prop2: "true",
};
exampleObj.prop1 = "Jonh";
let evh = {
    name: "Eddie",
    active: false,
    albums: ["Van Halen", "1984", 5150],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
let riri = {
    name: "Rihanna",
    popular: true,
};
const greetArtistes = (guitarist, singer) => {
    return `Hello ${guitarist.name} & ${singer.name}!`;
};
console.log(greetArtistes(evh, riri));
