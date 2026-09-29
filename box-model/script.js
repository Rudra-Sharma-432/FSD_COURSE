document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Target all range sliders inside our control area
  const sliders = document.querySelectorAll('#edits input[type="range"]');

  // 2. Attach a unified handler method inside a single structural loop
  sliders.forEach(slider => {
    
    const updateStyle = (inputElement) => {
      // Splits the ID attribute structure by the hyphen (e.g., "margin-1" -> ["margin", "1"])
      const [property, boxNumber] = inputElement.id.split('-');
      if (!property || !boxNumber) return;

      // Locate the correct target box element dynamically
      const targetBox = document.getElementById(`box-${boxNumber}`);
      
      if (targetBox) {
        const value = inputElement.value + 'px';

        if (property === 'margin') {
          // Applying padding onto the outer wrapper mimics a clean, visible margin area
          targetBox.parentElement.style.padding = value;
        } 
        else if (property === 'padding') {
          // Inner padding reveals the baseline green background layer below the inset shadow
          targetBox.style.padding = value;
        } 
        else if (property === 'border') {
          // Adjusts standard border width properties cleanly
          targetBox.style.borderStyle = 'solid';
          targetBox.style.borderWidth = value;
        }
      }
    };

    // Fire every time the user actively drags the controller handle
    slider.addEventListener('input', function() {
      updateStyle(this);
    });

    // Run computation setup once initially so it displays correct starting layout metrics
    updateStyle(slider);
  });
  
});
