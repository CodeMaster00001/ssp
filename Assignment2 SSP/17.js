// Function to split a string and convert it into an array of words
function splitStringToWords(string) {
    // Use the split() method to split the string based on spaces
    const wordsArray = string.split(' ');
    
    // Return the array of words
    return wordsArray;
}

// Example usage:
const inputString = 'Hello VAIBHAV how are you?';
console.log('Original string:', inputString);

const wordsArray = splitStringToWords(inputString);
console.log('Array of words:', wordsArray);
