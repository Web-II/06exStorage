import GefietsteKilometersRepository from "./GefietsteKilometersRepository.js";

export default class GefietsteKilometersComponent {
  #gefietsteKilometersRepository;
  #storage;
  constructor() {
    this.#gefietsteKilometersRepository = new GefietsteKilometersRepository();
    this.#storage = window.localStorage;

    const jaarSelect = document.getElementById("jaar");

    this.#jarenToHtml();

    document.getElementById("jaar").onchange = () => {};
    document.getElementById("opslaan").onclick = () => {};
  }

  /* De keuzelijst met jaren dynamisch genereren */
  #jarenToHtml() {
    this.#gefietsteKilometersRepository.geefJaren().forEach((value) => {
      const optionElement = document.createElement("option");
      optionElement.setAttribute("value", value);
      const optionTekst = document.createTextNode(value);
      optionElement.appendChild(optionTekst);
      document.getElementById("jaar").appendChild(optionElement);
    });
  }

  /* De tekstvakken dynamisch invullen */
  #gefietsteKilometersToHtml(jaar) {}

  #getJaarFromStorage() {}

  #setJaarInStorage() {}
}
