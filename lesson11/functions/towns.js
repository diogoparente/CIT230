const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    //Começa com as informações de Preston (4), depois volta ao começo (0) para pegar as informações de Fish Haven (1)
    for (let i = 4; i != 3; i++) {
      if ((towns[i].name == "Preston") || (towns[i].name == "Soda Springs") || (towns[i].name == "Fish Haven")) {
        // CRIANDO CADA PEDAÇO DA SEÇÃÕ DE INFORMAÇÕES
        // Seção - Container de todas as informações de cada cidade
        let card = document.createElement('section');

        // Divisões para conter textos e imagem (separados)
        let divTexts = document.createElement('div');
        let imgTexts = document.createElement('div');

        // Pedaços para conter cada informação
        let townName = document.createElement('h2');
        let townMotto = document.createElement('p');
        let year = document.createElement('p');
        let people = document.createElement('p');
        let rain = document.createElement('p');
        let pict = document.createElement('img');

        // COPIANDO CADA INFORMAÇÃO NO SEU DEVIDO PEDAÇO
        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        people.textContent = "Population: " + towns[i].currentPopulation;
        rain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        pict.setAttribute('src', "../lesson9/images/" + towns[i].photo);
        pict.setAttribute('alt', towns[i].name);

        // ADICIONAR AS INFORMAÇÕES DE TEXTO NA DIVISÃO DE TEXTO
        divTexts.appendChild(townName);
        divTexts.appendChild(townMotto);
        divTexts.appendChild(year);
        divTexts.appendChild(people);
        divTexts.appendChild(rain);

        // ADICIONAR A INFORMAÇÃO DE FIGURA NA DIVISÃO DE IMAGEM
        imgTexts.appendChild(pict);

        // ADICIONAR AS DIVISÕES NA SEÇÃO
        card.appendChild(divTexts);
        card.appendChild(imgTexts);

        document.querySelector('div.towns').appendChild(card);

        if (i == 5) {
          i = 0;
        };
      }
    }
  });