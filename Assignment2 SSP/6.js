// Function to perform Insertion sort
function insertionSort(array) {
    // Iterate through each element in the array starting from index 1
    for (let i = 1; i < array.length; i++) {
        const key = array[i]; // Current element to be inserted
        let j = i - 1;

        // Compare key with each element on its left side until an element smaller than key is found
        while (j >= 0 && array[j] > key) {
            // Shift elements to the right to make space for key
            array[j + 1] = array[j];
            j--;
        }

        // Insert the key in its appropriate position
        array[j + 1] = key;
    }
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];

console.log('Original array:', array);
insertionSort(array);
console.log('Sorted array:', array);
