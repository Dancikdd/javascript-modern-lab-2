export function calculateSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

export function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}