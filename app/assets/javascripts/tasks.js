// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$("#taskform").validate({
      errorClass: "my-error-class",
      validClass: "my-valid-class",
        rules: {
            "task[name]": {
                required: true,
                minlength: 3
            }

        },
        messages: {
            "task[name]": {
                required: 'Please enter a Name',
                minlength: jQuery.validator.format("At least {0} characters required!")

            }
         }
  });
