const API_KEY = "f11411f4912b564ba21c3e7ad3d9d520";

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      paintWeather(data);
      paintLocation(data);
    });
}

function paintWeather(data) {
  const weatherDescription = document.getElementById("weather-description");
  const weatherImg = document.querySelector("#weather img");

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  h1.innerText = data.weather[0].main;
  h2.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(
    data.main.temp_max
  )}°C`;

  weatherDescription.appendChild(h1);
  weatherDescription.appendChild(h2);
}

function paintLocation(data) {
  const location = document.getElementById("location");

  const h1 = document.createElement("h1");
  h1.innerText = data.name;

  location.appendChild(h1);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
