const heightCalc = (feet, inches, weight) => feet==="" || inches==="" || weight==="" ? "Your inputs can not be blank!!" : parseInt(feet) * 12 + parseInt(inches);
const bmiCalc = (weight, height) => (weight*=.45) / ((height*=0.025)^2);

function submitValues() { 
const feet = document.getElementById("myForm").elements.feet.value;
const inches = document.getElementById("myForm").elements.inches.value;
const weight = document.getElementById("myForm").elements.weight.value;
const height = heightCalc(feet, inches, weight);
if(!isNaN(height) && height !== "") {
document.getElementById("content").innerHTML= "Your BMI is: " + bmiCalc(weight, height) + "%";
} else {
document.getElementById("content").innerHTML= "You have invalide entries!"
}
}