// const BOX_1 = document.getElementById("box-1")
// const BOX_2 = document.getElementById("box-2")
// 
// const margin_1 = document.getElementById("margin-1")
// const border_1 = document.getElementById("border-1")
// const padding_1 = document.getElementById("padding-1")
// 
// 
// const margin_2 = document.getElementById("margin-2")
// const border_2 = document.getElementById("border-2")
// const padding_2 = document.getElementById("padding-2")



// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {

  // 1. Select all the range inputs inside your edits section
  const sliders = document.querySelectorAll('#edits input[type="range"]');

  // 2. Loop through every slider with a single event listener
  sliders.forEach(slider => {
    
    // Function to update the box styling
    const updateStyle = (inputElement) => {
      // Splits the ID by the hyphen. Example: "margin-1" becomes ["margin", "1"]
      const [property, boxNumber] = inputElement.id.split('-');
      
      // If the ID structure is incorrect (like padding21), stop to prevent errors
      if (!property || !boxNumber) return;

      // Dynamically target the correct box element (e.g., "box-1" or "box-2")
      const targetBox = document.getElementById(`box-${boxNumber}`);
      
      if (targetBox) {
        // 3. Map the ID name to the correct CSS style property
        if (property === 'margin') {
          targetBox.style.margin = inputElement.value + 'px';
        } 
        else if (property === 'padding') {
          targetBox.style.padding = inputElement.value + 'px';
        } 
        else if (property === 'border') {
          // Ensure the border style is solid so it shows up
          targetBox.style.borderStyle = 'solid';
          targetBox.style.borderWidth = inputElement.value + 'px';
        }
      }
    };

    // Trigger the update when you drag the slider
    slider.addEventListener('input', function() {
      updateStyle(this);
    });

    // Trigger once immediately on load so the boxes match the initial "value" attributes
    updateStyle(slider);
  });

});
