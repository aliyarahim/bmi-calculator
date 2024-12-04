document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const results = document.getElementById('results');

    calculateBtn.addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);

        results.innerHTML = ''; // Clear previous results

        // Validate height
        if (isNaN(height) || height <= 0) {
            results.innerHTML = `<p style="color: red;">Please provide a valid height (in cm).</p>`;
            return;
        }

        // Validate weight
        if (isNaN(weight) || weight <= 0) {
            results.innerHTML = `<p style="color: red;">Please provide a valid weight (in kg).</p>`;
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

        // Determine BMI category
        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal weight';
        } else {
            category = 'Overweight';
        }

        // Display the result
        results.innerHTML = `
            <p>Your BMI is <strong>${bmi}</strong>.</p>
            <p>Category: <strong>${category}</strong></p>
        `;
    });
});