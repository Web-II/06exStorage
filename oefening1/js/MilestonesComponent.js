export default class MilestonesComponent {
  #storage;
  #milestones = [];
  constructor(storage) {
    this.#storage = storage;

    const addButton = document.getElementById("add");
    const clearButton = document.getElementById("clear");
    const nameText = document.getElementById("name");
    const dateText = document.getElementById("date");

    addButton.onclick = () => {};

    clearButton.onclick = () => {};

    this.#toHTML();
  }

  #addMilestone(name, date) {}

  #deleteMilestone(ind) {}

  #clearMilestones() {}

  #toHTML() {
    const overview = document.getElementById("overview");
    overview.innerHTML = "";

    this.#milestones.map((m, ind) => {
      const note = document.createElement("div");
      note.setAttribute("class", "notification");

      const btn = document.createElement("button");
      btn.setAttribute("class", "delete");
      btn.addEventListener("click", () => {
        this.#deleteMilestone(ind);
      });
      note.appendChild(btn);

      const text = document.createTextNode(
        `${m.daysUntilDeadline} days left until ${m.name}`
      );
      note.appendChild(text);

      overview.appendChild(note);
    });
  }

  #getMilestonesFromStorage() {}

  #setMilestonesInStorage() {}
}
