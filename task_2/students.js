export function showStudents(students) {
    students.forEach(student => {
        console.log(`ID: ${student.id}, Nume: ${student.name}, Nota: ${student.grade}`);
    });
}

export function getStudentsWithGrade8(students) {
    return students.filter(student => student.grade >= 8);
}

export function findStudentById(students, id) {
    const student = students.find(student => student.id === id);

    if (!student) {
        throw new Error("Elevul nu există!");
    }

    return student;
}

export function addStudent(students, id, name, grade) {
    students.push({
        id: id,
        name: name,
        grade: grade
    });
}