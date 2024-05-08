// Function to perform Bubble sort
function bubbleSort(array) {
    const length = array.length;
    let swapped;

    // Iterate through the array repeatedly
    for (let i = 0; i < length - 1; i++) {
        swapped = false; // Flag to check if any swap occurred in the iteration

        // Compare adjacent elements and swap them if they are in the wrong order
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Swap the elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true; // Set the flag to true indicating a swap occurred
            }
        }

        // If no swap occurred during this iteration, the array is already sorted
        if (!swapped) {
            break;
        }
    }
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];

console.log('Original array:', array);
bubbleSort(array);
console.log('Sorted array:', array);
