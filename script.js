document.addEventListener('DOMContentLoaded', function() {
  let selectEl = document.getElementById('dest');
  let txtCustom = document.getElementById('other-destination');
  let fnameInput = document.getElementById('fname');
  let greetingOutput = document.getElementById('greetingOutput');

  if (selectEl && txtCustom && fnameInput && greetingOutput) {
    selectEl.addEventListener('change', function(e) {
      txtCustom.style.display = e.target.value === 'Other' ? 'block' : 'none';
    });

    // Pure JavaScript code for greeting
    document.querySelectorAll('button').forEach(function(button) {
      button.addEventListener('click', function() {
        let userGreeting = "Hello there, " + fnameInput.value;
        // Assuming getCatName() function is defined elsewhere
        userGreeting += getCatName();
        greetingOutput.textContent = userGreeting;
      });
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }
});
