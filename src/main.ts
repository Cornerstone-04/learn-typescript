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

const Cornerstone = new Coder("Cornerstone", "Afrobeats", 20, "JTypeScript");

console.log(Cornerstone.getAge());

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

console.log(Dave.getLange());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Jane = new Peeps("Jane");

console.log(John.id, Jane.id);
console.log(Peeps.count);

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

const myBands = new Bands();
myBands.data = ["The Cavemen", "Y2K"];
console.log(myBands.data);
myBands.data = [...myBands.data, "Mavins"];
