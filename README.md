# TypeScript Lesson

- TypeScript is JavaScript with syntax for types.
- It is a strongly typed language that builds on JavaScript providing better tooling.
- `tsc --init` is used to initialise a config file for TS settings.
- `tsc -w` is used to compile and watch for changes.

## Terminologies

- Strongly-typed: this demands the specification of data types.
- Inference: TS infers (specifies/suggests) what type of data is defined.
- Statically-typed: data typing is checked at compile time.

## Benefits

- Catch errors during development.
- Self documenting.

## Explicit declaration

- Declare a type with format "dataName: dataType"

```Typescript
    let myName: string = "Cornerstone";
```

## Implicit declaration

- Implicit declaration is when TS infers the type of data.

```JavaScript
    let myName = "Cornerstone"
    // here typescript will assume that this is a string since it's initial value is a string.
```

## Types

- `string`
- `number`
- `boolean`
- `any` : _This defeats strong typing and allowss any data type_
- `union`: this specifies that a variable may contain different types
- `RegExp`: for regex

```Typescript
    let myName: string = "Ephraim";
    let meaningOfLife: number;
    let isLoading: boolean;
    let album: any;
    let anew: string | number;
    let regex: RegExp = /\w+/g;


    myName = "Cornerstome";
    meaningOfLife = 20;
    isLoading = true;
    album = 1984; //any data type goes

    const sum = (a: number, b: number) => {
        return a + b;
    };
```

### Arrays

```Typescript
    let stringArr: string[] = ["one", "two", "three"];
    let guitars = ["Strat", "Les Paul", 5150];
    let mixedData = ["EVH", 1984, true];
```

### Tuple

- An array with a defined set of elements

```Typescript
    let myTuple: [string, number, boolean] = ["EVH", 1984, true];
```

### Objects

```Typescript
    let exampleObj = {
        prop1: "Dave",
        prop2: "true",
    };
```

### Type & Properties

- you can create a custom type

```Typescript
    type Guitarist = {
        name: string;
        active?: boolean; // optional prop
        albums: (string | number)[];
    };

    let evh: Guitarist = {
        name: "Eddie",
        active: false,
        albums: ["Van Halen", "1984", 5150],
    };
```

for functions

```Typescript
    const greetGuitarist = (guitarist: Guitarist) => {
        return `Hello ${guitarist.name}!`;
    };
```

### Interfaces

```Typescript
    interface Singer {
        name: string;
        popular?: boolean;
    }

    let riri: Singer = {
        name: "Rihanna",
        popular: true,
    };
```

### Enums

- Unlike most TypeScript features, enums are not a type-level addition to JavaScript but something added to the Language and runtime.

```Typescript
    enum Grade {
        F,
        E,
        D,
        C,
        B,
        A,
    }
    let grade: Grade = Grade.A;
```

### Type Aliases

```Javascript
    type stringOrNumber = string | number;

    type stringOrNumberArray = (string | number)[];

    type Guitarist = {
        name: string;
        active?: boolean;
        albums: stringOrNumberArray;
    };

    type UserId = stringOrNumber;
```

---

## Functions

```TypeScript
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
```

### Optional parameters

- place a type guard to prevent type error.
- your optional parameter should be last.

```TypeScript
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};
```

### Rest Parameters

- rest parameter should come last.

```TypeScript
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
```

### Never Type

- Can be used to return errors and infinit loops

```TypeScript
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
```

---

## Type Assertion & Type Casting

- Type assertion is a way to tell the compiler that we know better than it.
  - It's telling the compiler that you have more information about the types that it does, so it should listen to you.
- Assign using "as" keyword
- _*Ask Gabriel to explain this to you*_

```TypeScript
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
```

- Assertions can be used with DOM

```TypeScript
//The DOM
const img = document.querySelector("img") as HTMLImageElement;
// const myImg = document.getElementById("#img")! non null assertion;
const myImg = document.getElementById("#img");

img.src;
myImg.src //might be null
```

---

### Classes

```Typescript
class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}

const Cornerstone = new Coder("Cornerstone", "Afrobeats", 20, "TypeScript");

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    lang: string
  ) {
    super(name, music, age, lang);
    this.computer = computer;
  }

  public getLange() {
    return `I write ${this.lang}`;
  }
}

const Dave = new WebDev("Mac", "Dave", "Lofi", 25, "TypeScript");
```

## Getters & Setters

```TypeScript
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}


const myBands = new Bands()
myBands.data = ["The Cavemen", "Y2K"]
console.log(myBands.data);
```