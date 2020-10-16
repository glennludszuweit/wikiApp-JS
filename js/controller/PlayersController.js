import PlayersView from "../view/PlayersView.js";
import PlayersModel from "../model/PlayersModel.js";

export default class PlayersController {
  playersView = Object;
  playersModel = Object;
  constructor() {
    this.playersView = new PlayersView();
    this.playersModel = new PlayersModel();
    this.init();
  }
  init() {
    this.playersView.list();
    this.playersView.info();
    this.add();
    this.edit();
    this.toggleMenu();
    this.search();
    this.listHighlight();
  }

  add() {
    const addBtn = document.getElementById("add-button");

    addBtn.addEventListener("click", () => {
      this.playersView.editForm();
    });
  }

  edit() {
    const editBtn = document.getElementById("edit-button");

    editBtn.addEventListener("click", () => {
      this.playersView.editForm();
    });
  }

  toggleMenu() {
    const logo = document.querySelector(".logo");

    logo.addEventListener("click", () => {
      this.navigation.style.display =
        this.navigation.style.display === "none" ? "" : "none";
    });
  }

  search() {}

  listHighlight() {}
}
