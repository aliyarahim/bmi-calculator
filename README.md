# BMI Calculator

A simple web-based Body Mass Index (BMI) calculator built using HTML, CSS, and JavaScript.

## Features
- Accepts user input for height (in centimeters) and weight (in kilograms).
- Validates input to ensure it is a positive numerical value.
- Calculates BMI and categorizes the result into **Underweight**, **Normal weight**, or **Overweight**.
- Provides a quick BMI weight guide.

## Live Demo
You can use this BMI Calculator in your browser without any installation. Just open the `index.html` file in any modern web browser.

## How to Use
1. Enter your height in centimeters in the **Height in CM** input box.
2. Enter your weight in kilograms in the **Weight in KG** input box.
3. Click the **Calculate BMI** button.
4. View your BMI and its corresponding category below the form.

## BMI Weight Guide
- **Underweight**: BMI less than 18.5
- **Normal Range**: BMI between 18.5 and 24.9
- **Overweight**: BMI 25 or higher

## Code Overview
### HTML
- The structure of the page includes a form for user inputs and sections for displaying results and the BMI guide.

### CSS
- Provides a responsive and clean design with a central container for better user experience.

### JavaScript
- Handles user input validation.
- Calculates BMI using the formula:  
  \[
  \text{BMI} = \frac{\text{weight (kg)}}{(\text{height (m)})^2}
  \]
- Displays results dynamically with user-friendly messages.
