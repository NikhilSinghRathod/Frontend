const pincode = "A400088";
const regex = /^[1-9]\d{5}$/;
if(regex.test(pincode)){
    console.log("Valid Pincode");
}
else{
    console.log("Invalid Pincode");
} 