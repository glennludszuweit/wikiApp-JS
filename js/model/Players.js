import PlayersView from '../view/PlayersView.js';
import LS from './LS.js';

class Players {
  constructor() {
    this.playersData = [];
    this.playerObject = {};
    this.data = LS.GET('players');
  }

  init() {
    PlayersView.listView();
    PlayersView.playerView();
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
        LS.checkValue();
        //set player value
        this.playerObject.id = Math.floor(Date.now() / 1000);
        this.playerObject.name = name.value;
        this.playerObject.description = $('#description').summernote('code');
        //add values to localStorage
        this.playersData.push(this.playerObject);
        LS.SET('players', this.playersData);
        //temporary solution
        location.reload();
      });
    });
  }

  edit() {
    const editBtn = document.querySelector('.edit-button');

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      PlayersView.editForm();

      const update = document.querySelector('.update');
      const name = document.getElementById('update-name');

      update.addEventListener('click', (e) => {
        e.preventDefault();

        this.data.forEach((player) => {
          if (player.id == update.id) {
            player.name = name.value;
          }
        });

        LS.SET('players', this.playersData);
      });
    });
  }

  remove() {
    const remove = document.querySelector('.delete');
    remove.addEventListener('click', () => {
      const index = this.data.findIndex((player) => player.id == remove.id);
      if (index == 0) {
        return;
      } else {
        this.data.splice(index, 1);
      }
      LS.SET('players', this.data);
      //temporary solution
      location.reload();
    });
  }
}

export default new Players();
