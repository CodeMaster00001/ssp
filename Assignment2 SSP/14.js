// Array containing books with their author, title, and reading status
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

// Function to display the reading status of each book in the library
function displayReadingStatus(library) {
    // Iterate through each book object in the library array
    library.forEach(book => {
        // Display the book name (title), author name, and reading status
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Reading Status: ${book.readingStatus ? 'Already read' : 'Not yet read'}`);
        console.log('---'); // Separator line for readability
    });
}

// Call the function to display the reading status of each book
displayReadingStatus(library);
