// Function to heapify a subtree rooted at node i
function heapify(array, length, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child index
    const right = 2 * i + 2; // Right child index

    // If the left child is larger than root
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }

    // If the right child is larger than the largest so far
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root, swap and heapify the affected subtree
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]; // Swap elements
        heapify(array, length, largest); // Recursively heapify the subtree
    }
}

// Function to perform Heap sort
function heapSort(array) {
    const length = array.length;

    // Build a max heap from the array
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    // One by one, extract elements from the heap and place them at the end of the array
    for (let i = length - 1; i > 0; i++) {
        // Swap the root (largest element) with the last element in the heap
        [array[0], array[i]] = [array[i], array[0]];

        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];

console.log('Original array:', array);
heapSort(array);
console.log('Sorted array:', array);
