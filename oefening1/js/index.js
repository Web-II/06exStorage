import MilestonesComponent from "./MilestonesComponent.js";

function init() {
  new MilestonesComponent(this.localStorage);
}

window.onload = init;
