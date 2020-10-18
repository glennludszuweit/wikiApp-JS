import PlayersView from '../view/PlayersView.js';
import LSController from './LSController.js';

class PlayersController {
  constructor() {
    this.playersData = [];
    this.playerObject = {};
  }

  init() {
    PlayersView.listView();
    PlayersView.infoView();
    this.getId();
    this.add();
  }

  getId() {
    const namesContainer = document.querySelector('.names');
    namesContainer.addEventListener('click', (e) => {
      e.preventDefault();
      let id = Number(e.target.children[0].textContent);
      return PlayersView.infoView(id);
    });
  }

  add() {
    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', () => {
      PlayersView.addForm();

      const submit = document.getElementById('submit');
      const cancel = document.getElementById('cancel');
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

        //temporary solution
        location.reload();
      });
      //cancel adding player
      cancel.addEventListener('click', () => {
        return;
      });
    });
  }

  edit() {
    const editBtn = document.querySelectorAll('.edit-button');

    editBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        PlayersView.editForm();

        const submit = document.getElementById('submit');
        const cancel = document.getElementById('cancel');
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

          //temporary solution
          location.reload();
        });
        //cancel adding player
        cancel.addEventListener('click', () => {
          return;
        });
      });
    });
  }

  remove() {}
}

export default new PlayersController();
