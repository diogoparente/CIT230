// FISH HAVEN (Bear Lake Sands) - CURRENT WEATHER ---------------------------------
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);

    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('tempF').textContent = Math.floor(jsObject.main.temp);
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    if (jsObject.main.temp <= 50 || jsObject.wind.speed > 3.0) {
      var chill = 35.74 + 0.6215 * jsObject.main.temp - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16);
      document.getElementById("valueWindchill").innerHTML = chill.toFixed() + " ºF";
    } else {
      document.getElementById("valueWindchill").innerHTML = "N/A";
    }

  });

// 5 DAY FORECAST -----------------------------------------------------------------
const apiURL_5Day = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

fetch(apiURL_5Day)
  .then((response) => response.json())
  .then((_5Day) => {
    console.table(_5Day);

    var day_number = 1;

    for (i = 0; i < _5Day.list.length; i++) {
      if (_5Day.list[i].dt_txt.includes('18:00:00')) {

        let time = _5Day.list[i].dt;
        let date = new Date(time * 1000);
        const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        document.getElementById("icon" + day_number).src = "../lesson10/images/" + _5Day.list[i].weather[0].icon +".png";        
        document.getElementById("icon" + day_number).alt = _5Day.list[i].weather[0].description;

        document.getElementById("day" + day_number).textContent = dayName[date.getDay()];
        document.getElementById("temp" + day_number).textContent = Math.floor(_5Day.list[i].main.temp);
        //document.getElementById("temp_min" + day_number).textContent = Math.floor(_5Day.list[i].main.temp_min);
        //document.getElementById("temp_max" + day_number).textContent = Math.floor(_5Day.list[i].main.temp_max);
        day_number++;
      }
    }
  });