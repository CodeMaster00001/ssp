// Class representing a stack
class Stack {
    constructor() {
        // Initialize an empty array to represent the stack
        this.stack = [];
    }

    // Method to add an element to the stack
    push(element) {
        this.stack.push(element);
    }

    // Method to remove and return the top element from the stack
    pop() {
        return this.stack.pop();
    }

    // Method to check if a given element is present in the stack
    contains(element) {
        // Use the array's includes() method to check if the element is in the stack
        return this.stack.includes(element);
    }

    // Method to display the stack contents
    display() {
        console.log('Stack:', this.stack);
    }
}

// Example usage:
const stack = new Stack();

// Add elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Display the stack
stack.display();

// Check if an element is present in the stack
const elementToCheck = 20;
const isPresent = stack.contains(elementToCheck);

console.log(`Is ${elementToCheck} present in the stack?`, isPresent);

// Remove an element from the stack
const removedElement = stack.pop();
console.log('Removed element:', removedElement);

// Display the stack after removal
stack.display();
