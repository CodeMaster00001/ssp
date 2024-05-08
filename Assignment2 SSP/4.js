// Function to merge two sorted arrays into one sorted array
function merge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from leftArray and rightArray and merge them into mergedArray
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in leftArray, add them to mergedArray
    while (leftIndex < leftArray.length) {
        mergedArray.push(leftArray[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in rightArray, add them to mergedArray
    while (rightIndex < rightArray.length) {
        mergedArray.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return mergedArray; // Return the merged array
}

// Function to perform Merge sort
function mergeSort(array) {
    // Base case: If the array has less than 2 elements, it is already sorted
    if (array.length < 2) {
        return array;
    }

    // Find the middle index of the array
    const middleIndex = Math.floor(array.length / 2);

    // Recursively sort the left and right halves of the array
    const leftHalf = mergeSort(array.slice(0, middleIndex));
    const rightHalf = mergeSort(array.slice(middleIndex));

    // Merge the sorted left and right halves
    return merge(leftHalf, rightHalf);
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];

console.log('Original array:', array);
const sortedArray = mergeSort(array);
console.log('Sorted array:', sortedArray);
