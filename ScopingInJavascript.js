let genderType = "female" //global variable
function printGender() {
    let colour = "Brown" //function-scoped
    if (genderType.startsWith("female")) {
        // Inside If Block 
        var age = 30;  // function-scoped
            let colour = "Pink"; //block-scoped
            console.log("Inside if-block, colour:", colour);
}
 //Outside if-block but inside function
    console.log("Outside if-block, age:", age);
}
//Call function and print global variable
printGender()
console.log("Global genderType:", genderType);

//Change global variable
genderType = "male";

printGender(); // observe behavior again