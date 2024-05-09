type One = string;
type Two = string | number;
type Three = "Hello";

// Tyep assertion
// convert to more or less specific
let a: One = "Hello";
let b = a as Two; //assign a less specific type
let c = a as Three; //more specific
let d = <One>"World";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return " " + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
// TS doesn't see the problem
let nextVal: number = addOrConcat(2, 2, "concat") as number;

console.log(myVal, nextVal);

//The DOM
const img = document.querySelector("img") as HTMLImageElement;
// const myImg = document.getElementById("#img")! non null assertion;
const myImg = document.getElementById("#img");

img.src;

