function quickSort(array) {
    // Base case: If the array has less than 2 elements, it is already sorted
    if (array.length < 2) {
        return array;
    }

    // Choose a pivot element from the array (using the last element as the pivot in this case)
    const pivot = array[array.length - 1];
    
    // Arrays to hold elements less than and greater than the pivot
    const less = [];
    const greater = [];
    
    // Partition the array into less and greater arrays
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    
    // Recursively sort the less and greater arrays and concatenate the results with the pivot
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];

console.log('Original array:', array);
const sortedArray = quickSort(array);
console.log('Sorted array:', sortedArray);
