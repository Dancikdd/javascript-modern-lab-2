import readline from "readline";
import { calculateAverage } from "./utils.js";
import {
    showStudents,
    getStudentsWithGrade8,
    findStudentById,
    addStudent
} from "./students.js";

const students = [
    { id: 1, name: "Ana", grade: 9 },
    { id: 2, name: "Ion", grade: 7 },
    { id: 3, name: "Maria", grade: 10 },
    { id: 4, name: "Andrei", grade: 6 },
    { id: 5, name: "Elena", grade: 8 }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n--- MENIU ---");
    console.log("1. Afișează toți elevii");
    console.log("2. Elevii cu nota >= 8");
    console.log("3. Media clasei");
    console.log("4. Caută elev după ID");
    console.log("5. Adaugă elev");
    console.log("6. Ieșire");

    rl.question("\nAlege opțiunea: ", option => {

        if (option === "1") {
            showStudents(students);
            menu();

        } else if (option === "2") {
            const goodStudents = getStudentsWithGrade8(students);
            showStudents(goodStudents);
            menu();

        } else if (option === "3") {
            const grades = students.map(student => student.grade);
            const average = calculateAverage(grades);

            console.log(`Media clasei este: ${average}`);
            menu();

        } else if (option === "4") {
            rl.question("Introdu ID-ul elevului: ", id => {

                try {
                    const student = findStudentById(students, Number(id));

                    console.log(
                        `Elev găsit: ${student.name}, nota: ${student.grade}`
                    );

                } catch (error) {
                    console.log(error.message);
                }

                menu();
            });

        } else if (option === "5") {
            rl.question("ID: ", id => {
                rl.question("Nume: ", name => {
                    rl.question("Nota: ", grade => {

                        addStudent(
                            students,
                            Number(id),
                            name,
                            Number(grade)
                        );

                        console.log(`Elevul ${name} a fost adăugat!`);

                        menu();
                    });
                });
            });

        } else if (option === "6") {
            rl.close();

        } else {
            console.log("Opțiune invalidă!");
            menu();
        }
    });
}

menu();