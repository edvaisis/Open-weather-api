var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var humidity = document.querySelector('.humidity');
var feels_like_temp =  document.querySelector('.feels_like_temp');
var temp_min =  document.querySelector('.temp_min');
var temp_max =  document.querySelector('.temp_max');
var wind_speed =  document.querySelector('.wind_speed');
var rain = document.querySelector('.rain');





button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=29a7f4e8432589d08c5bab75bc30bc7e')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidValue = data['main']['humidity'];
  var feelsliketempValue =  data['main']['feels_like'];
  var tempMinValue =  data['main']['temp_min'];
  var tempMaxValue =  data['main']['temp_max'];
  var windSpeedValue = data['wind']['deg'];
  var rainValue = data['rain'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Current Weather Conditions - "+descValue;
  temp.innerHTML = "Current Temperature - "+tempValue+ " &#8451";
  humidity.innerHTML = "Humidity! - " +humidValue+ "%";
  feels_like_temp.innerHTML = "Feels like temperature - " +feelsliketempValue+ " &#8451";
  temp_min.innerHTML =  "Minimum temperature -  " +tempMinValue+ " &#8451";
  temp_max.innerHTML =  "Maximum temperature -  " +tempMaxValue+" &#8451";
  wind_speed.innerHTML = "Wind speed -  " +windSpeedValue+ " mph";
  rain.innerHTML = "Rain Volume  - " +rainValue;

  input.value ="";

}) 
})