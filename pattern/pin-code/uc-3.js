const pincode = "400088B";
const regex = /^[1-9]\d{5}$/;
if(regex.test(pincode)){
    console.log("Valid Pincode");
}
else{
    console.log("Invalid Pincode");
}