let students = [
    {id:1, name: "abebe", grade:80},
    {id:2, name: "kebede", grade:75},
];

console.log(" The original array is: ")
console.log(students)

// Add a student to the array

const newStudent = {id:3, name:"hana", grade:70};

students.push(newStudent);

console.log("The array after adding a student")
console.log(students)

// Remove a student from the array

const removeById = (idToRemove) => {
    return students.filter(student => student.id !== idToRemove);
};

const afterFilter = removeById(3);
console.log("The array after removing a student")
console.log(afterFilter)

// Update a student's grade
const updateGrade = (idToUpdate, newGrade) => {
    return students.map(student => {
        if (student.id === idToUpdate) {
            return {
                ...student,        
                grade: newGrade    
            };
        }
        return student; 
    });
};
const updatedStudents = updateGrade(1, 90);
console.log("The array after updating student's grade")
console.log(updatedStudents)

// list all students
console.log("List of all students")
students.forEach(student => {
    console.log(`ID: ${student.id} | ${student.name} | ${student.grade}%`);
});

// Calculate class average

const totalGrade = students.reduce((sum, student) => {
    return sum + student.grade;
}, 0);
const averageGrade = totalGrade / students.length;
console.log("The average garde of the students is - ", averageGrade)

// Find top student

let topStudent = students[0];

students.forEach(student => {
    if (student.grade > topStudent.grade) {
        topStudent = student;
    }
});
console.log("The top student is - " , topStudent.name, "with", topStudent.grade) 