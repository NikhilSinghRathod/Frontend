const validatePincode =pin =>  /^[1-9]\d{5}$/.test(pin);
const pincode = "400088";
console.log(validatePincode(pincode));

