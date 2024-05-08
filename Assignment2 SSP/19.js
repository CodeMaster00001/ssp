// Function to convert minutes to hours and minutes
function timeConvert(minutes) {
    // Calculate the number of hours
    const hours = Math.floor(minutes / 60);

    // Calculate the remaining minutes
    const remainingMinutes = minutes % 60;

    // Return a formatted string showing the conversion
    return `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;
}

// Example usage:
console.log(timeConvert(200)); // Expected output: "200 minutes = 3 hour(s) and 20 minute(s)."
