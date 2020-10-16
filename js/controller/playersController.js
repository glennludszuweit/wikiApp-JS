import PlayersView from '../view/playersView.js';

export default class PlayersController extends PlayersView {
  init() {
    console.log('hello');
    this.list();
    this.info();
    this.add();
    this.edit();
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
}
