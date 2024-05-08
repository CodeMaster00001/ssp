// Function to validate whether a given value is a RegExp object
function isRegExp(value) {
    // Check if the value is an instance of RegExp
    return value instanceof RegExp;
}

// Example usage:
const value1 = /hello/;
const value2 = new RegExp('world');
const value3 = 'hello';
const value4 = 123;

console.log('Is value1 a RegExp object?', isRegExp(value1)); // Should print true
console.log('Is value2 a RegExp object?', isRegExp(value2)); // Should print true
console.log('Is value3 a RegExp object?', isRegExp(value3)); // Should print false
console.log('Is value4 a RegExp object?', isRegExp(value4)); // Should print false
