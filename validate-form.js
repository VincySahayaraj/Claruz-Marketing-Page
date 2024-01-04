// my method for validate username

// $.validator.addMethod("name_regex", function(value, element) {

//     // return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);

//     //return this.optional(element) || /^[a-zA-Z , . '-]+$/i.test(value);

//     return this.optional(element) || /^[A-Za-z]+((\s)?([A-Za-z])+)*$/i.test(value);

//     }, "Please enter a valid Name.");


// function phonenumber(inputtxt)
// {
//   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//   if(inputtxt.value.match(phoneno))
//      {
// 	   return true;
// 	 }
//    else
//      {
// 	   alert("Not a valid Phone Number");
// 	   return false;
//      }
// }

// $.validator.addMethod("phone_regex", function(value, element) {

//     // return this.optional(element) || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value);

//     // return this.optional(element) || /^\d{10}$/i.test(value); 
//     return this.optional(element) || /^\d{9,12}$/i.test(value); 

//     }, "Phone number should be 9-12 digits");

$(document).ready(function () {
    $.validator.addMethod("name_regex", function (value, element) {



        return this.optional(element) || /^[A-Za-z]+((\s)?([A-Za-z])+)*$/i.test(value);

    }, "Please enter a valid Name.");
    $.validator.addMethod(
        "phone_regex",
        function (value, element) {
            // Define your phone number regex pattern here (e.g., 10 digits)
            //var phonePattern = /^[0-9]{10}$/;
            var phonePattern = /^\d{9,12}$/;
            return this.optional(element) || phonePattern.test(value);
        },
        "Please enter a valid phone number"
    );

    $.validator.addMethod(
        "email_regex",
        function (value, element) {
            // Define your email regex pattern here
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return this.optional(element) || emailPattern.test(value);
        },
        "Please enter a valid email address"
    );

    $("#contact-form").validate(

        {
            rules: {

                'name': {

                    required: true,
                    minlength: 3,
                    maxlength: 50,
                    name_regex: true,

                },
                'email': {

                    required: true,
                    email_regex: true,
                    maxlength: 50,

                },

                'phone': {

                    required: true,
                    phone_regex: true,
                    maxlength: 50,

                },
                'message': {


                    maxlength: 500,

                },
            },

            messages: {

                'name': {

                    required: "The name field is mandatory!",
                    minlength: "Enter name with atleast 3 letters!",
                    maxlength: "you have reached your limit!",
                    name_regex: "Only Alphabets are accepted"

                },
                'email': {

                    required: "The email field is mandatory!",
                    email_regex: "Please enter a valid email address",
                    maxlength: "you have reached your limit!",

                },

                'phone': {

                    required: "The phone field is mandatory!",
                    phone_regex: 'Please enter valid phone number',
                    maxlength: "you have reached your limit!",


                },
                'message': {
                    maxlength: "you have reached your limit!",
                }


            },
        })
});