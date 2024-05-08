// Class representing a node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Class representing the linked list
class LinkedList {
    constructor() {
        this.head = null; // Initialize the head to null
    }

    // Method to add a new node at the beginning of the list
    addNode(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Method to check whether the linked list is empty
    isEmpty() {
        // Return true if the head is null (empty list)
        return this.head === null;
    }
}

// Example usage:
const linkedList = new LinkedList();

// Check if the linked list is empty initially
console.log('Is the linked list empty?', linkedList.isEmpty()); // Should print true

// Add nodes to the linked list
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);

// Check if the linked list is empty after adding nodes
console.log('Is the linked list empty?', linkedList.isEmpty()); // Should print false

