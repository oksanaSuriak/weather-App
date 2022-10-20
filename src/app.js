function displayTemperature(response) {

let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML= response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;
}


let apiKey = "66c7da026329d4c2a98c508b6ddbcfb1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);