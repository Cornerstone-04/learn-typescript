"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentID: "20/52HA058",
    title: "Project",
    grade: 5,
};
console.log(updateAssignment(assign1, { grade: 95 }));
