import PlayersView from '../view/PlayersView.js';

export default class PlayersController extends PlayersView {
  init() {
    console.log('hello');
    this.list();
    this.info();
    this.add();
    this.edit();
    this.toggleMenu();
    this.search();
    this.listHighlight();
  }

  add() {
    const addBtn = document.getElementById('add-button');

    addBtn.addEventListener('click', () => {
      this.addForm();
    });
  }

  edit() {
    const editBtn = document.getElementById('edit-button');

    editBtn.addEventListener('click', () => {
      this.editForm();
    });
  }

  toggleMenu() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      this.navigation.style.display =
        this.navigation.style.display === 'none' ? '' : 'none';
    });
  }

  search() {}

  listHighlight() {}
}
