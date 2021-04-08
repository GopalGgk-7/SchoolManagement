$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
//      lastname: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            dob: "required",
            clgName: "required",
            department: "required",
            eventName: "required"
        },
        // Specify validation error messages
//        messages: {
//            name: "Please enter your Name",
//            email: "Please enter a valid email address",
//            phone: "Please enter a valid phone number",
//            dob: "Please select your date of birth ",
//            clgName: "Please select your college",
//            department: "Please select your department",
//            eventName: "Please select your event"
//        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {

            saveRegistrationForm(form);
            return;
//            form.submit();
        }
    });


    function saveRegistrationForm(form) {
        var request;
        var studentsData = {};
        studentsData.name = $('#name').val();
        studentsData.email = $('#email').val();
        studentsData.phone = $('#phone').val();
        studentsData.dob = $('#dob').val();
        studentsData.clgName = $('#clgName').val();
        studentsData.department = $('#department').val();
        studentsData.eventName = $('#eventName').val();
        studentsData.batch = new Date().getFullYear().toString();

        console.log('----formdata----->>>', studentsData);



        request = $.ajax({
            url: "http://localhost:8080/addEvent",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(studentsData)
        });
        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            // Log a message to the console
            console.log("Hooray, it worked!", response, textStatus, jqXHR);
            if (response.result == "Succesfully Registered") {
                alert(response.result);
                form.reset();
            } else if (response.result == "Email already exist") {
                alert(response.result);
            }

        });
        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error("The following error occurred: " + textStatus, errorThrown);
        });

    }





});

