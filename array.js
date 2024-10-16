function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        return "Please provide a valid array of numbers.";
    }

    let sum = 0;
    for (let number of numbers) {
        if (typeof number !== 'number') {
            return "The array should contain only numbers.";
        }
        sum += number;
    }
    return sum;
}

// Example usage:
const result = sumArray([1, 2, 3, 4, 5]); // Output: 15
console.log(result);
