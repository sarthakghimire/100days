export const calculate = () => {
  const mass = document.getElementById("mass").value;
  const height = document.getElementById("height").value;

  if (mass && height) {
    const BMI = mass / ((height / 10000) * height);
    document.getElementById("BMIValue").innerHTML =
      "Your BMI is:" + BMI.toFixed(3) + " kg/m²";

    if (BMI < 18.5) {
      document.getElementById("message").innerHTML =
        "You are underweight. Consider consulting a nutritionist to ensure a healthy diet.";
    }
    if (BMI >= 18.5 && BMI <= 24.9) {
      document.getElementById("message").innerHTML =
        "You have a normal weight. Keep up the good work with a balanced diet and regular exercise.";
    }
    if (BMI > 24.9 && BMI <= 29.9) {
      document.getElementById("message").innerHTML =
        "You are overweight. Consider adopting a healthier lifestyle with proper diet and exercise.";
    }
    if (BMI > 29.9 && BMI <= 34.9) {
      document.getElementById("message").innerHTML =
        "You are in Obesity Class I. It's important to focus on weight management for your health.";
    }
    if (BMI > 34.9 && BMI <= 39.9) {
      document.getElementById("message").innerHTML =
        "You are in Obesity Class II. Consult a healthcare professional for guidance.";
    }
    if (BMI > 40) {
      document.getElementById("message").innerHTML =
        "You are in Obesity Class III. Seeking medical advice is strongly recommended.";
    }
  } else {
    document.getElementById("BMIValue").innerHTML = "Enter valid data";
    document.getElementById("message").innerHTML = "";
  }
};
