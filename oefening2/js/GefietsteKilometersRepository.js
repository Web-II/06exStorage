export default class GefietsteKilometersRepository {
  #repository = [];
  constructor() {
    this.#opvullen();
  }

  geefJaren() {
    return [];
  }

  geefGefietsteKilometersVoorEenJaar(jaar) {}

  wijzigGefietsteKilometers(jaar, waarden) {}

  #voegToe(jaar, aantalKilometers, bedragPerKilometer) {}

  #opvullen() {
    this.#voegToe(
      2020,
      [107, 109, 183, 154, 118, 136, 104, 178, 189, 98, 107, 145],
      0.2
    );
    this.#voegToe(
      2021,
      [123, 145, 178, 113, 174, 158, 149, 133, 167, 120, 166, 142],
      0.2
    );
    this.#voegToe(
      2022,
      [156, 128, 129, 160, 190, 145, 155, 198, 120, 130, 140, 150],
      0.21
    );
  }
}
