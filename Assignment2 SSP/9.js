// Function to check if a numeric array is sorted in ascending order
function isArraySorted(array) {
    // Iterate through the array
    for (let i = 0; i < array.length - 1; i++) {
        // Check if the current element is greater than the next element
        if (array[i] > array[i + 1]) {
            // If true, the array is not sorted in ascending order
            return false;
        }
    }
    // If the loop completes without finding an out-of-order element, the array is sorted
    return true;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 3, 8, 2, 7];

console.log('Is array1 sorted?', isArraySorted(array1)); // Should print true
console.log('Is array2 sorted?', isArraySorted(array2)); // Should print false
