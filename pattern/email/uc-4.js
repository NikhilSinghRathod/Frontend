function isValidEmail(email){
    const regex = /^abc([._+\-][a-z]+)?@bridgelabz.co(\.[a-z]+)?$/;
    if(regex.test(email)){
        return "Email Validated";
    }
    else {
        return "Invalid Email";
    }
}
console.log(isValidEmail("abc@yahoo.com"));
console.log(isValidEmail("abc-100@yahoo.com"));
console.log(isValidEmail("abc.india@bridgelabz.co.in"));
console.log(isValidEmail("abc123@bridgelabz.co"));
console.log(isValidEmail("abc..xyz@bridgelabz.co.in"));
console.log(isValidEmail("abc!xyz@bridgelabz.co"));