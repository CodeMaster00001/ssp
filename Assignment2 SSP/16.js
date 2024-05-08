// Function to parse a URL and display its components
function parseURL(urlString) {
    // Create a new URL object
    const url = new URL(urlString);
    
    // Display the different components of the URL
    console.log('URL:', urlString);
    console.log('Protocol:', url.protocol); // Protocol (e.g., 'https:')
    console.log('Hostname:', url.hostname); // Hostname (e.g., 'example.com')
    console.log('Port:', url.port || 'default'); // Port (e.g., '80' or '443' or '' for default)
    console.log('Pathname:', url.pathname); // Pathname (e.g., '/path/to/resource')
    console.log('Search:', url.search || 'none'); // Query string (e.g., '?key=value')
    console.log('Hash:', url.hash || 'none'); // Hash (e.g., '#section1')
}

// Example usage:
const urlToParse = 'https://example.com:8080/path/to/resource?key=value#section1';
parseURL(urlToParse);
