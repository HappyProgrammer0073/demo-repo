window.onload = () => {
    let button = document.querySelector("#myBtn");  

    /* 
    The querySelector function returns the first element with a matching CSS selector, 
    therefore the value within the parameters will have similar syntax.

    "let" means to declare a block scoped variable. (Th variable will only work within the curly brackets)
    */

    button.addEventListener("click", calculateBmi); // When calling the function inside the parameters of addEventListener, it looks like it's not needed to add the parameters.
}

function calculateBmi() {   // Remember that you can call a function or variable before declaring it.
    let weight = parseFloat(document.querySelector("#weight").value);
    console.log("10");

    /*
    The parseFloat(string, radix) method parses a value as a string and returns the first float. The "radix" 
    parameter specifies the number system to be used. 2 = binary, 8 = octal, 10 = decimal (default), 16 (or if value starts with 0x) = hexadecimal. 
    */

    let height = parseFloat(document.querySelector("#height").value);

    let result = undefined;  // This will be the final result which will be displayed when you enter your details.
    // let result = document.querySelector("#result"); 
    
    if (height === "" || isNaN(height)) { // if height is strictly equal to an empty string, and if hight is not a number, the execute the following code.
        result.innerHTML = "Provide a valid height.";
    }

    else if (weight === "" || isNaN(weight)) { // If weight is strictly equal to an empty string, and if weight is not a number, execute the following code.
        result.innerHTML = "Provide a valid weight."
    }

    else {
        let bmi = (weight / (height * height)).toFixed(2); // .toFixed() method is used to show a certain amount of numbers after the decimal point.

        if (bmi < 18.6) {
            result = window.alert("BMI: " + bmi + " You are underweight.");  // .innerHTML means that we are changing the text of the html that is stored in the "result" variable.
            // result.innerHTML = "BMI: " + bmi + "<br> You are underweight."; 
        }

        else if (bmi >= 18.6 && bmi < 24.9) {
            result = window.alert("BMI: " + bmi + " Your weight is average.");
            // result.innerHTML = "BMI: " + bmi + "<br> Your weight is average.";
        }

        else {
            result = window.alert("BMI: " + bmi + " You are overweight.");
            // result.innerHTML = "BMI: " + bmi + "<br> You are overweight.";
        }

        return result; // REMEMBER to return result!!!
    }
}
