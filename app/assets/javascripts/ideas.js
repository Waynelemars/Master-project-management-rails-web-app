// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$("#ideaform").validate({
      errorClass: "my-error-class",
      validClass: "my-valid-class",
        rules: {
            "idea[name]": {
                required: true
            }

        },
        messages: {
            "idea[name]": {
                required: 'Please enter a Name',

            }
         }
  });
