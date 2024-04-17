document.addEventListener('DOMContentLoaded', function() {
  let selectEl = document.getElementById('select-list');
  let txtCustom = document.getElementById('txt-custom');
  let fnameInput = document.getElementById('fname');
  let greetingOutput = document.getElementById('greetingOutput');

  if (selectEl && txtCustom && fnameInput && greetingOutput) {
    selectEl.addEventListener('change', function(e) {
      if (e.target.value === 'no') {
        txtCustom.style.display = 'block';
      } else {
        txtCustom.style.display = 'none';
      }
    });

    // jQuery code
    $(document).ready(function() {
      console.log("Document is ready");

      let userGreeting = "Hello there, ";

      $("button").click(function() {
        userGreeting += $("#fname").val();

        userGreeting += getCatName(); // Assuming getCatName() function is defined elsewhere

        $("#greetingOutput").text(userGreeting);
      });
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }
});