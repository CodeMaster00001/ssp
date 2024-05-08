// Function to sort the characters in a string alphabetically
function sortStringAlphabetically(string) {
    // Convert the string into an array of characters
    const charArray = string.split('');

    // Sort the array of characters
    charArray.sort();

    // Convert the sorted array back into a string
    const sortedString = charArray.join('');

    // Return the sorted string
    return sortedString;
}

// Example usage:
const inputString = 'VAIBHAV';
console.log('Original string:', inputString);

const sortedString = sortStringAlphabetically(inputString);
console.log('Sorted string:', sortedString);
