import Players from '../model/Players.js';
import PlayersView from '../view/PlayersView.js';

class PlayersController {
  init() {
    PlayersView.listView();
    PlayersView.playerView();
    this.addPlayer();
  }

  addPlayer() {
    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', () => {
      PlayersView.addForm();
      //save to localStorage
      const submit = document.getElementById('submit');
      submit.addEventListener('click', (e) => {
        e.preventDefault();
        //add player
        Players.add();
        //temporary solution
        location.reload();
      });
    });
  }

  editPlayer() {
    const editBtn = document.querySelector('.edit-button');
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      PlayersView.editForm();
      //save to localStorage
      const update = document.querySelector('.update');
      update.addEventListener('click', (e) => {
        e.preventDefault();
        //update player
        Players.edit(update.id);
        //temporary solution
        location.reload();
      });
    });
  }

  removePlayer() {
    const remove = document.querySelector('.delete');
    remove.addEventListener('click', () => {
      //remove player
      Players.remove(remove.id);
      //temporary solution
      location.reload();
    });
  }
}

export default new PlayersController();
