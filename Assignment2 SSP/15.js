// Function to display the current time
function displayCurrentTime() {
    // Create a new Date object to get the current date and time
    const now = new Date();
    
    // Extract the hours, minutes, and seconds from the current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time components as two-digit strings (e.g., 01, 02, etc.)
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Construct the time string in the format "HH:MM:SS"
    const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Print the current time to the console
    console.log(currentTime);
}

// Call the displayCurrentTime function every second (1000 milliseconds)
setInterval(displayCurrentTime, 1000);
