// Index Signatures
interface TransactionObj {
  //   Pizza: number;
  //   Books: number;
  //   Job: number;
  [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

console.log(todaysTransactions["Dave"]); //drawback because TS can't know what the keys are

interface Student {
  //   [key: string]: any;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Cornerstone",
  GPA: 4.27,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudent = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudent(student, "GPA");

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "hustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  hustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
