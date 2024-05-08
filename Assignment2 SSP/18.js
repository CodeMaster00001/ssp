// Function to convert lowercase letters to uppercase and vice versa in a string
function convertCase(string) {
    // Initialize an empty string to store the converted string
    let convertedString = '';

    // Iterate through each character in the input string
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            // Convert the character to lowercase and add it to the converted string
            convertedString += char.toLowerCase();
        } else {
            // Convert the character to uppercase and add it to the converted string
            convertedString += char.toUpperCase();
        }
    }

    // Return the converted string
    return convertedString;
}

// Example usage:
const inputString = 'VAIBHAV';
console.log('Original string:', inputString);

const convertedString = convertCase(inputString);
console.log('Converted string:', convertedString);
