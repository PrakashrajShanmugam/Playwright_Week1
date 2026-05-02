const browserName = "Chrome"; // Global Variable

function getBrowserName() {

    if (browserName === "Chrome") {

        let browserName = "Safari"; // Local Variable 

        console.log("Inside block:", browserName); // Inside Block Print Value
    }

    console.log("Inside function:", browserName); // Outside Block Print Value
}

getBrowserName();