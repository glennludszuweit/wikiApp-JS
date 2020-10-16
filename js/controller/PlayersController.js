import PlayersView from '../view/PlayersView.js';

class PlayersController {
  init() {
    PlayersView.list();
    PlayersView.info();
    this.add();
    this.edit();
  }

  add() {
    const addBtn = document.getElementById('add-button');

    addBtn.addEventListener('click', () => {
      PlayersView.addForm();
    });
  }

  edit() {
    const editBtn = document.getElementById('edit-button');

    editBtn.addEventListener('click', () => {
      PlayersView.editForm();
    });
  }
}

export default new PlayersController();
