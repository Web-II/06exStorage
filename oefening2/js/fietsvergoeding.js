'use strict';
class GefietsteKilometers {
  #jaar;
  #aantalKilometers;
  #bedragPerKilometer;
  constructor(jaar, aantalKilometers, bedragPerKilometer) {
    this.jaar = jaar;
    this.aantalKilometers = aantalKilometers;
    this.bedragPerKilometer = bedragPerKilometer;
  }

  get jaar() {
    return this.#jaar;
  }
  get aantalKilometers() {
    return this.#aantalKilometers;
  }
  get bedragPerKilometer() {
    return this.#bedragPerKilometer;
  }

  set jaar(value) {
    this.#jaar = value;
  }
  set aantalKilometers(value) {
    this.#aantalKilometers = value;
  }
  set bedragPerKilometer(value) {
    this.#bedragPerKilometer = value;
  }
}

class GefietsteKilometersRepository {
  #repository = [];
  constructor() {
    this.opvullen();
  }

  get repository() {
    return this.#repository;
  }

  geefJaren() {}

  geefGefietsteKilometersVoorEenJaar(jaar) {}

  wijzigGefietsteKilometers(jaar, waarden) {}

  voegToe(jaar, aantalKilometers, bedragPerKilometer) {}

  opvullen() {
    this.voegToe(
      2015,
      [107, 109, 183, 154, 118, 136, 104, 178, 189, 98, 107, 145],
      0.2
    );
    this.voegToe(
      2016,
      [123, 145, 178, 113, 174, 158, 149, 133, 167, 120, 166, 142],
      0.2
    );
    this.voegToe(
      2017,
      [156, 128, 129, 160, 190, 145, 155, 198, 120, 130, 140, 150],
      0.21
    );
  }
}

class GefietsteKilometersComponent {
  #gefietsteKilometersRepository;
  #storage;
  constructor(window) {
    this.gefietsteKilometersRepository = new GefietsteKilometersRepository();
    this.storage = window.localStorage;
  }

  get gefietsteKilometersRepository() {
    return this.#gefietsteKilometersRepository;
  }
  get storage() {
    return this.#storage;
  }

  set gefietsteKilometersRepository(value) {
    this.#gefietsteKilometersRepository = value;
  }
  set storage(value) {
    this.#storage = value;
  }

  /* De keuzelijst met jaren dynamisch genereren */
  jarenToHtml() {
    this.#gefietsteKilometersRepository.geefJaren().forEach((value) => {
      const optionElement = document.createElement('option');
      optionElement.setAttribute('value', value);
      const optionTekst = document.createTextNode(value);
      optionElement.appendChild(optionTekst);
      document.getElementById('jaar').appendChild(optionElement);
    });
  }

  /* De tekstvakken dynamisch invullen */
  gefietsteKilometersToHtml(jaar) {}

  getJaarFromStorage() {}

  setJaarInStorage() {}
}

function init() {
  const gefietsteKilometersCompent = new GefietsteKilometersComponent(this);
  const jaarSelect = document.getElementById('jaar');

  gefietsteKilometersCompent.jarenToHtml();

  document.getElementById('jaar').onchange = () => {};
  document.getElementById('opslaan').onclick = () => {};
}

window.onload = init;
