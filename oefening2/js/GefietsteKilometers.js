export default class GefietsteKilometers {
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
