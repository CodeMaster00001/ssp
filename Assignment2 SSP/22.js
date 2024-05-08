// Define the Rectangle class
class Rectangle {
    constructor(width, height) {
        // Initialize width and height properties
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea() {
        return this.width * this.height;
    }

    // Method to calculate the perimeter of the rectangle
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Example usage:
// Create an instance of the Rectangle class with a width of 5 and a height of 10
const myRectangle = new Rectangle(5, 10);

// Calculate and display the area of the rectangle
const area = myRectangle.calculateArea();
console.log(`Area of the rectangle: ${area}`);

// Calculate and display the perimeter of the rectangle
const perimeter = myRectangle.calculatePerimeter();
console.log(`Perimeter of the rectangle: ${perimeter}`);
