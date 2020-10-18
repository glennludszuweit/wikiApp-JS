import PlayersModel from '../model/PlayersModel.js';
import LSController from '../controller/LSController.js';
import WYSIWYG from './WYSIWYG.js';
import PlayersController from '../controller/PlayersController.js';

class PlayersView {
  constructor() {
    this.player;
    this.data = PlayersModel.data;
    this.id = 1602955499;
    this.namesContainer = document.querySelector('.names');
    this.contentContainer = document.querySelector('.content');
  }

  listView() {
    LSController.checkValue();
    let output = this.data.map((player) => {
      return `
          <li class="name">${player.name}<span id="player-id" style="display: none">${player.id}</span></li>
        `;
    });
    this.namesContainer.innerHTML = output.join('');
  }

  infoView(id) {
    this.data.filter((player) => {
      if (player.id === id) {
        return (this.contentContainer.innerHTML = `
        <div class="content-heading">
          <h2 class="player-name">${player.name}</h2>
          <div class="icons">
            <i class="fas fa-edit edit-button"></i>
            <i class="fas fa-trash delete"></i>
          </div>
        </div>
        <div class="player-info">${player.description}</div>
      `);
      } else if (!player.id || id == 0) {
        return (this.contentContainer.innerHTML = `
        <div class="icons" style="display: none">
          <i class="fas fa-edit edit-button"></i>
          <i class="fas fa-trash edit-button"></i>
        </div>
        <div class="player-info">${this.data[0].description}</div>
      `);
      }
    });

    PlayersController.edit();
  }

  addForm() {
    this.contentContainer.innerHTML = `
      <h1>Add Player</h1>
      <form action="">
        <input id="name" type="text" placeholder="players name" value="" required>
        <div id="description"></div>
        <div class="buttons">
          <button id="cancel">Cancel</button>
          <button id="submit">Submit</button>
        </div>
      </form>
    `;

    WYSIWYG.summerNote('#description');
  }

  editForm() {
    const playerName = document.querySelector('.player-name');
    const playerInfo = document.querySelector('.player-info');

    this.contentContainer.innerHTML = `
      <h1>Edit Player</h1>
      <form action="">
        <input id="name" type="text" placeholder="players name" value="${playerName.textContent}" required>
        <div id="description">${playerInfo.innerHTML}</div>
        <div class="buttons">
          <button id="cancel">Cancel</button>
          <button id="submit">Submit</button>
        </div>
      </form>
    `;

    WYSIWYG.summerNote('#description');
  }
}

export default new PlayersView();
