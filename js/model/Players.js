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
      //cancel adding player
      cancel.addEventListener('click', () => {
        return;
      });
    });
  }

  edit() {
    const editBtn = document.querySelector('.edit-button');
    const id = document.getElementById('player-info-id').textContent;
    console.log(id);

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      PlayersView.editForm();

      this.data.filter((player) => {
        if (player.id === id) {
        } else {
          return;
        }
      });
    });
  }

  remove() {}
}

export default new Players();
