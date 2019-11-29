// PRESTON - CURRENT WEATHER ------------------------------------------------------
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

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
const apiURL_5Day = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

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

        document.getElementById("icon" + day_number).src = "../lesson10/images/" + _5Day.list[i].weather[0].icon + ".png";
        document.getElementById("icon" + day_number).alt = _5Day.list[i].weather[0].description;

        document.getElementById("day" + day_number).textContent = dayName[date.getDay()];
        document.getElementById("temp" + day_number).textContent = Math.floor(_5Day.list[i].main.temp);
        day_number++;
      }
    }
  });

// UPCOMING EVENTS ----------------------------------------------------------------










const townsURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];


    
    //Começa com as informações de Preston (4), depois volta ao começo (0) para pegar as informações de Fish Haven (1)
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
        // CRIANDO CADA PEDAÇO DA SEÇÃÕ DE INFORMAÇÕES
        // Seção - Container de todas as informações de cada cidade
        let card = document.createElement('section');

        // Divisões para conter textos e imagem (separados)
        let divTexts = document.createElement('div');
        let imgTexts = document.createElement('div');

        // Pedaços para conter cada informação
        let townEvents0 = document.createElement('p');
        let townEvents1 = document.createElement('p');
        let townEvents2 = document.createElement('p');
        let townEvents3 = document.createElement('p');
        let pict = document.createElement('img');

        // COPIANDO CADA INFORMAÇÃO NO SEU DEVIDO PEDAÇO
        townEvents0.textContent = towns[i].events[0];
        townEvents1.textContent = towns[i].events[1];
        townEvents2.textContent = towns[i].events[2];
        townEvents3.textContent = towns[i].events[3];
        pict.setAttribute('src', "images/" + towns[i].photo);
        pict.setAttribute('alt', towns[i].name);

        // ADICIONAR AS INFORMAÇÕES DE TEXTO NA DIVISÃO DE TEXTO
        divTexts.appendChild(townEvents0);
        divTexts.appendChild(townEvents1);
        divTexts.appendChild(townEvents2);
        divTexts.appendChild(townEvents3);

        // ADICIONAR A INFORMAÇÃO DE FIGURA NA DIVISÃO DE IMAGEM
        imgTexts.appendChild(pict);

        // ADICIONAR AS DIVISÕES NA SEÇÃO
        card.appendChild(divTexts);
        card.appendChild(imgTexts);

        document.querySelector('.townEvents').appendChild(card);

      }
    }
  });