// my method for validate username

$.validator.addMethod("name_regex", function(value, element) {

    // return this.optional(element) || /^[a-zA-Z ]*$/i.test(value);
    
    //return this.optional(element) || /^[a-zA-Z , . '-]+$/i.test(value);
    
    return this.optional(element) || /^[A-Za-z]+((\s)?([A-Za-z])+)*$/i.test(value);
    
    }, "Please enter a valid Name.");
    
    
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
    
    $.validator.addMethod("phone_regex", function(value, element) {
    
        // return this.optional(element) || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(value);
       
        // return this.optional(element) || /^\d{10}$/i.test(value); 
        return this.optional(element) || /^\d{9,12}$/i.test(value); 
    
        }, "Phone number should be 9-12 digits");
    
    $(document).ready(function () {
    
        $("#contact-form").validate(
    
            {
                rules: {
    
                    'name': {
    
                        required: true,
                        minlength: 3,
                        name_regex:true,
    
                    },
                    'email': {
    
                        required: true,
    
                    },
                   
                    'phone': {
    
                        required: true,
                        phone_regex:true,
    
                    },
    
                   
                   
    
                },
    
                messages: {
    
                    'name': {
    
                        required: "The name field is mandatory!",
                        minlength: "Enter name with atleast 3 letters!",
    
                    },
                    'email': {
    
                        required: "The email field is mandatory!",
                        email_regex: "You have used invalid characters. Are permitted only letters numbers!",
    
                    },
                   
                    'phone': {
    
                        required: "The phone field is mandatory!",
                        
    
                    },
                   
                 
                },
            })
    });