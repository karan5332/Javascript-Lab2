window.addEventListener("DOMContentLoaded", function () {
// Get references to the range input elements
  const red = document.getElementById("red");
  const green = document.getElementById("green");
  const blue = document.getElementById("blue");


// Function to update the background color
  function updateBackgroundColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;

// Set the background color using the RGB values
    document.documentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
 // Add event listeners for each range input
  red.addEventListener("input", updateBackgroundColor);
  green.addEventListener("input", updateBackgroundColor);
  blue.addEventListener("input", updateBackgroundColor);
  
});