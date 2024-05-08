// Sample object
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Print the object before deleting the rollno property
console.log("Before deleting rollno property:");
console.log(student);

// Delete the rollno property from the student object
delete student.rollno;

// Print the object after deleting the rollno property
console.log("After deleting rollno property:");
console.log(student);
