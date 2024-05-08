// Function to validate whether a given value is null
function isNull(value) {
    // Check if the value is strictly equal to null
    return value === null;
}

// Example usage:
const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = '';

console.log('Is value1 null?', isNull(value1)); // Should print true
console.log('Is value2 null?', isNull(value2)); // Should print false
console.log('Is value3 null?', isNull(value3)); // Should print false
console.log('Is value4 null?', isNull(value4)); // Should print false
