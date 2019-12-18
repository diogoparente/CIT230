// CURITIBA - CURRENT WEATHER ------------------------------------------------------
const CTBA = "https://api.openweathermap.org/data/2.5/weather?id=6322752&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

fetch(CTBA)
  .then((response) => response.json())
  .then((json_ctba) => {
    console.table(json_ctba);

    document.getElementById('cond_ctba').textContent = json_ctba.weather[0].main;
    document.getElementById('temp_ctba').textContent = Math.floor(json_ctba.main.temp);
  });

// PORTO ALEGRE - CURRENT WEATHER ------------------------------------------------------
const POA = "https://api.openweathermap.org/data/2.5/weather?id=3452925&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

fetch(POA)
  .then((response) => response.json())
  .then((json_poa) => {
    console.table(json_poa);

    document.getElementById('cond_poa').textContent = json_poa.weather[0].main;
    document.getElementById('temp_poa').textContent = Math.floor(json_poa.main.temp);
  });

  // CAMPINAS - CURRENT WEATHER ------------------------------------------------------
const CAMP = "https://api.openweathermap.org/data/2.5/weather?id=3467865&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

fetch(CAMP)
  .then((response) => response.json())
  .then((json_camp) => {
    console.table(json_camp);

    document.getElementById('cond_camp').textContent = json_camp.weather[0].main;
    document.getElementById('temp_camp').textContent = Math.floor(json_camp.main.temp);
  });

    // SÃO PAULO - CURRENT WEATHER ------------------------------------------------------
const SPAUL = "https://api.openweathermap.org/data/2.5/weather?id=3448439&APPID=b285b20fa82efc1c3fed473c86303dd2&units=imperial";

fetch(SPAUL)
  .then((response) => response.json())
  .then((json_spaul) => {
    console.table(json_spaul);

    document.getElementById('cond_spaul').textContent = json_spaul.weather[0].main;
    document.getElementById('temp_spaul').textContent = Math.floor(json_spaul.main.temp);
  });

  document.getElementById('temp1').textContent = 14;