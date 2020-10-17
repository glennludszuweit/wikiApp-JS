import PlayersView from '../view/PlayersView.js';
import LSController from './LSController.js';

class PlayersController {
  constructor() {
    this.playersData = [];
    this.playerObject = {};
  }

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

      const submit = document.getElementById('submit');
      const name = document.getElementById('name');

      //save to localStorage
      submit.addEventListener('click', (e) => {
        e.preventDefault();
        LSController.checkValue();
        //set player value
        this.playerObject.id = Math.floor(Date.now() / 1000);
        this.playerObject.name = name.value;
        this.playerObject.description = $('#description').summernote('code');
        //add values to localStorage
        this.playersData.push(this.playerObject);
        LSController.SET('players', this.playersData);
      });
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
