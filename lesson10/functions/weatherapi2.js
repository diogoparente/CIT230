const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=b285b20fa82efc1c3fed473c86303dd2";
//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3459712&APPID=b285b20fa82efc1c3fed473c86303dd2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);

    document.getElementById('tempF').textContent = Math.floor((jsObject.main.temp * 9 / 5) - 459.67);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  });