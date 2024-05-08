// Function to validate whether a given value is a number
function isNumber(value) {
    // Check if the value is of type 'number' and is not NaN
    // `typeof value === 'number'` ensures that the type of the value is number.
    // `!isNaN(value)` checks that the value is not NaN (not a number).
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
const value1 = 42;
const value2 = '42';
const value3 = NaN;
const value4 = null;

console.log('Is value1 a number?', isNumber(value1)); // Should print true
console.log('Is value2 a number?', isNumber(value2)); // Should print false
console.log('Is value3 a number?', isNumber(value3)); // Should print false
console.log('Is value4 a number?', isNumber(value4)); // Should print false
