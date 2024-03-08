const resultBoard = document.getElementById('result');

// Getting the units.
const metric = document.getElementById('radio1');
const imperial = document.getElementById('radio2');

// height and width input
const heightInput = document.getElementById("height");
const widthInput = document.getElementById("width");

// Assuming you have a form with id "myForm"
const form = document.getElementById("myForm");

// Add event listener to imperial radio button
imperial.addEventListener("change", function () {
    if (imperial.checked) {
        // Update unit labels for imperial
        let cm = document.getElementById('cm-unit');
        let kg = document.getElementById('kg-unit');
        kg.textContent = 'lbs';
        cm.textContent = 'in';
    }
});

metric.addEventListener(
    "change", function () {
        if (metric.checked) {
            let cm = document.getElementById('cm-unit');
            let kg = document.getElementById('kg-unit');
            kg.textContent = 'kg';
            cm.textContent = 'cm';
        }
    })

// Add event listener to the form for when it's submitted
form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the height and width inputs
    const heightValue = heightInput.value;
    const widthValue = widthInput.value;

    // Check if metric is checked
    if (metric.checked) {
        // Convert height and width to metric units
        const heightInMeters = heightValue / 100;
        const weightInKg = widthValue;

        // Calculate BMI
        const bmi = weightInKg / (heightInMeters * heightInMeters);

        // Display the result
        resultBoard.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    }
});

//create a reset button 
//create a reset button 
const resetButton = document.getElementById('reset');

// Add event listener to the reset button
resetButton.addEventListener("click", function () {
    // Clear the result board
    resultBoard.textContent = 'Your Result Appears Here';

    // Clear the height and width inputs
    heightInput.value = '';
    widthInput.value = '';

    // Uncheck the radio buttons
    metric.checked = true;
    imperial.checked = false;
});






