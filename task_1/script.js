const grades = [7, 9, 5, 10, 8, 6];

const gradesover8 = grades.filter(grade => grade > 8);
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
const increasedGrades = grades.map(grade => Math.min(grade + 1, 10));

console.log(gradesover8);
console.log("Media:", average);
console.log("Note mărite cu 1:", increasedGrades);