function linearSearch(array, element) {
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element is equal to the desired element
        if (array[i] === element) {
            // If found, return the index
            return i;
        }
    }
    
    // If the element is not found, return -1
    return -1;
}

// Example usage:
const array = [10, 25, 30, 45, 60];
const element = 30;

const index = linearSearch(array, element);
if (index !== -1) {
    console.log(`The element ${element} is found at index ${index}.`);
} else {
    console.log(`The element ${element} is not found in the array.`);
}
