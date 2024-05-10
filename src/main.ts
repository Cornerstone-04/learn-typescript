//Utility types
// partial
interface Assignment {
  studentID: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentID: "20/52HA058",
  title: "Project",
  grade: 5,
};
console.log(updateAssignment(assign1, { grade: 95 }));

// required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

// const assignVerified: Readonly <Assignment>= {...assignGraded, verified: true}

const hexColorMap: Record<string, string> = {
  red: "#FF0000",
  green: "#00FF00",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "C",
};
