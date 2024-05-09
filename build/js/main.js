"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Cornerstone = new Coder("Cornerstone", "Afrobeats", 20, "JTypeScript");
console.log(Cornerstone.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLange() {
        return `I write ${this.lang}`;
    }
}
const Dave = new WebDev("Mac", "Dave", "Lofi", 25, "TypeScript");
console.log(Dave.getLange());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Jane = new Peeps("Jane");
console.log(John.id, Jane.id);
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["The Cavemen", "Y2K"];
console.log(myBands.data);
myBands.data = [...myBands.data, "Mavins"];
