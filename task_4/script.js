import readline from "readline";

import {
    filterByDepartment,
    calculateAverageSalary,
    getExperiencedEmployees,
    increaseSalary
} from "./employees.js";

let employees = [
    {
        id: 1,
        name: "Ion Popescu",
        department: "IT",
        salary: 12000,
        experience: 5
    },
    {
        id: 2,
        name: "Maria Ionescu",
        department: "HR",
        salary: 9000,
        experience: 2
    },
    {
        id: 3,
        name: "Andrei Rusu",
        department: "IT",
        salary: 11000,
        experience: 4
    },
    {
        id: 4,
        name: "Elena Ceban",
        department: "Marketing",
        salary: 8500,
        experience: 3
    },
    {
        id: 5,
        name: "Victor Munteanu",
        department: "IT",
        salary: 13000,
        experience: 7
    },
    {
        id: 6,
        name: "Ana Lupu",
        department: "HR",
        salary: 9500,
        experience: 5
    },
    {
        id: 7,
        name: "Mihai Ciobanu",
        department: "Marketing",
        salary: 8000,
        experience: 1
    }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showEmployees(list) {
    if (list.length === 0) {
        console.log("\nNu exista angajati!");
        return;
    }

    console.log("\n--- ANGAJATI ---");

    list.forEach(employee => {
        const {
            id,
            name,
            department,
            salary,
            experience
        } = employee;

        console.log(
            `ID: ${id} | ${name} | ${department} | ${salary} MDL | Experienta: ${experience} ani`
        );
    });
}

function showReport() {
    console.log("\n--- RAPORT FINAL ---");

    employees.forEach(employee => {
        const {
            name,
            department,
            salary,
            experience
        } = employee;

        const newSalary = experience > 3
            ? salary * 1.10
            : salary;

        console.log(
            `${name} | ${department} | Experienta: ${experience} ani | Salariu: ${salary} MDL | Salariu nou: ${newSalary.toFixed(2)} MDL`
        );
    });
}

function menu() {
    console.log("\n--- GESTIONAREA ANGAJATILOR ---");
    console.log("1. Afiseaza angajatii");
    console.log("2. Filtreaza dupa departament");
    console.log("3. Calculeaza salariul mediu");
    console.log("4. Afiseaza angajatii cu experienta > 3 ani");
    console.log("5. Majoreaza salariile cu 10%");
    console.log("6. Afiseaza raportul final");
    console.log("7. Iesire");

    rl.question("\nAlege optiunea: ", option => {

        if (option === "1") {

            showEmployees(employees);
            menu();

        } else if (option === "2") {

            rl.question("Introdu departamentul: ", department => {

                const result = filterByDepartment(
                    employees,
                    department
                );

                showEmployees(result);
                menu();
            });

        } else if (option === "3") {

            const average = calculateAverageSalary(employees);

            console.log(
                `\nSalariul mediu: ${average.toFixed(2)} MDL`
            );

            menu();

        } else if (option === "4") {

            const result = getExperiencedEmployees(employees);

            showEmployees(result);
            menu();

        } else if (option === "5") {

            employees = increaseSalary(employees);

            console.log(
                "\nSalariile angajatilor cu experienta mai mare de 3 ani au fost majorate cu 10%!"
            );

            menu();

        } else if (option === "6") {

            showReport();
            menu();

        } else if (option === "7") {

            console.log("Programul s-a incheiat.");
            rl.close();

        } else {

            console.log("Optiune invalida!");
            menu();
        }
    });
}

menu();