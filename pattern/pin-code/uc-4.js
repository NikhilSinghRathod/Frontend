const pincode = "400088";
const regex = /^[1-9]\d{2}\s?\d{3}$/;
if(regex.test(pincode)){
    console.log("Valid Pincode");
}
else{
    console.log("Invalid Pincode");
}