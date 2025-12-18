const person = {
    name: "Sam",
    age: 19,
    city: "Hyderabad",
    occupation: "Student"
};

console.log("Person Details:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Occupation:", person.occupation);
person.marks = 80;
console.log("Marks",person.marks)
person.occupation="SDE";
console.log("Occupation:", person.occupation);
delete person.occupation;
console.log("after deleting Occupation: ",person);
