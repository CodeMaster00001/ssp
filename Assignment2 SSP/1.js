function findWordIndices(string, word) {
    const indices = []; // Array to store the indices
    let index = string.indexOf(word); // Find the first occurrence of the word in the string
    
    // Continue to find subsequent occurrences of the word
    while (index !== -1) {
        // Push the current index to the array
        indices.push(index);
        
        // Look for the next occurrence of the word starting from the current index + 1
        index = string.indexOf(word, index + 1);
    }
    
    return indices; // Return the array of indices
}

// Example usage:
const string = "The word VAIBHAV is here, and another VAIBHAV is there.";
const word = "VAIBHAV";

const indices = findWordIndices(string, word);
console.log(`The word "${word}" was found at indices:`, indices);
