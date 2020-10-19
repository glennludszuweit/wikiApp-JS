import PlayersView from '../view/PlayersView.js';
import LS from '../controller/LS.js';

class Players {
  constructor() {
    this.playersData = [];
    this.playerObject = {};
    this.data = LS.GET('players');
  }

  init() {
    PlayersView.listView();
    PlayersView.playerView();
    // this.add();
    this.edit();
  }

  add() {
    LS.checkValue();
    //set player value
    this.playerObject.id = Math.floor(Date.now() / 1000);
    this.playerObject.name = document.getElementById('name').value;
    this.playerObject.description = $('#description').summernote('code');
    //add values to localStorage
    this.playersData.push(this.playerObject);
    LS.SET('players', this.playersData);
  }

  edit(id) {
    const index = this.data.findIndex((player) => player.id == id);
    this.data[index].name = document.getElementById('update-name').value;
    this.data[index].description = $('#update-description').summernote('code');
    LS.SET('players', this.data);
  }

  remove(id) {
    const index = this.data.findIndex((player) => player.id == id);
    if (index == 0) {
      return;
    } else {
      this.data.splice(index, 1);
    }
    LS.SET('players', this.data);
  }
}

export default new Players();
