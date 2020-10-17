import PlayersView from "../view/PlayersView.js";
import PlayersModel from "../model/PlayersModel.js";

export default class PlayersController {
  playersView = Object;
  playersModel = Object;
  navigationElement = Element;
  contentElement = Element;
  addBtnElement = Element;
  logoElement = Element;
  constructor() {
    this.playersView = new PlayersView();
    this.playersModel = new PlayersModel();
    this.navigationElement = document.querySelector(".navigation");
    this.contentElement = document.querySelector(".content");
    this.addBtnElement = document.getElementById("add-button");
    this.logoElement = document.querySelector(".logo");
    this.init();
  }
  init() {
    this.navigation();
    this.content();
    this.addForm();
    this.editForm();
    this.toggleMenu();
    this.search();
    this.listHighlight();
  }

  navigation() {
    this.navigationElement.innerHTML = this.playersView.navigation();
  }

  content() {
    this.contentElement.innerHTML = this.playersView.content();
  }

  addForm() {
    this.addBtnElement.addEventListener("click", () => {
      this.contentElement.innerHTML = this.playersView.addForm();
      $("#description").summernote(this.playersView.summerNote());
    });
  }

  editForm() {
    const editBtn = document.getElementById("edit-button");
    editBtn.addEventListener("click", () => {
      const playerName = document.querySelector(".player-name");
      const playerInfo = document.querySelector(".player-info");
      this.contentElement.innerHTML = this.playersView.editForm(
        playerName,
        playerInfo
      );
      $("#description").summernote(this.playersView.summerNote());
    });
  }

  toggleMenu() {
    this.logoElement.addEventListener("click", () => {
      this.navigationElement.style.display = this.playersView.toggleMenu(
        this.navigationElement.style.display
      );
    });
  }
  //TODO try catch
  search() {}

  listHighlight() {}
}
