export function filterByDepartment(employees, department) {
    return employees.filter(
        employee => employee.department.toLowerCase() === department.toLowerCase()
    );
}

export function calculateAverageSalary(employees) {
    if (employees.length === 0) {
        return 0;
    }

    const total = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

    return total / employees.length;
}

export function getExperiencedEmployees(employees) {
    return employees.filter(
        employee => employee.experience > 3
    );
}

export function increaseSalary(employees) {
    return employees.map(employee => {
        if (employee.experience > 3) {
            return {
                ...employee,
                salary: employee.salary * 1.10
            };
        }

        return { ...employee };
    });
}