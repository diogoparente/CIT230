const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if ((towns[i].name == "Fish Haven") || (towns[i].name == "Preston") || (towns[i].name == "Soda Springs")){
      let card = document.createElement('section');

      let townName = document.createElement('h2');
      townName.textContent = towns[i].name;
      card.appendChild(townName);

      let townMotto = document.createElement('p');
      townMotto.textContent = towns[i].motto;
      card.appendChild(townMotto);

      let year = document.createElement('p');
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      card.appendChild(year);

      let people = document.createElement('p');
      people.textContent = "Population: " + towns[i].currentPopulation;
      card.appendChild(people);

      let rain = document.createElement('p');
      rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      card.appendChild(rain);

      let pict = document.createElement('img');
      pict.setAttribute('src', "images/" + towns[i].photo);
      pict.setAttribute('alt', towns[i].name);
      card.appendChild(pict);

      document.querySelector('div.towns').appendChild(card);
    }}
  });