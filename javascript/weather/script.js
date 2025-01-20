function getLocation() {
  const location = document.getElementById("loc").value;
  document.getElementById("showLocation").innerHTML = location;
  checkWeather(location);
}
const apiKey = "358a2e92397955d5d6971a055e86445e";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(
    ".temperature"
  ).innerHTML = `<h1>${data.main.temp}<sup>o</sup>C</h1>`;

  const forPicture = data.weather[0].main;
  if (forPicture == "Clouds") {
    document.querySelector("#weather").src = "images/clouds.png";
  } else if (forPicture == "Clear") {
    document.querySelector("#weather").src = "images/clear.png";
  } else if (forPicture == "Rain") {
    document.querySelector("#weather").src = "images/rain.png";
  } else if (forPicture == "Drizzle") {
    document.querySelector("#weather").src = "images/drizzle.png";
  } else if (forPicture == "Mist") {
    document.querySelector("#weather").src = "images/mist.png";
  }
}
