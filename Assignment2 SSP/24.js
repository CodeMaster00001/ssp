// JSON string to parse
const jsonString = 'VAIBHAV'; // This is an invalid JSON string

// Function to parse a JSON string and handle any SyntaxError
function parseJson(jsonString) {
    try {
        // Attempt to parse the JSON string
        const parsedData = JSON.parse(jsonString);

        // If parsing is successful, log the parsed data
        console.log('Parsed data:', parsedData);
    } catch (error) {
        // If a SyntaxError occurs during parsing, handle it gracefully
        if (error instanceof SyntaxError) {
            console.log('SyntaxError: The JSON string is invalid.');
        } else {
            // Handle other types of errors (if any)
            console.log('An unexpected error occurred:', error);
        }
    }
}

// Call the function to parse the JSON string and handle any errors
parseJson(jsonString);
