// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

let myName: "Dave";

let userName: "Dave" | "John" | "Amy";

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number;
//   }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 4));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3));

//Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (1 > 100) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  // type guards
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen"); //return a never type to handle a potential undefined
};
