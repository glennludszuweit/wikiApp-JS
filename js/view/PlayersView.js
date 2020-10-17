import PlayersModel from '../model/PlayersModel.js';
import LSController from '../controller/LSController.js';
import WYSIWYG from './WYSIWYG.js';

class PlayersView {
  constructor() {
    this.names = document.querySelector('.names');
    this.contentContainer = document.querySelector('.content');
  }

  list() {
    LSController.checkValue();
    let output = PlayersModel.name().map((name) => {
      return `
          <li><p>${name}</p></li>
        `;
    });
    this.names.innerHTML = output.join('');
  }

  info() {
    this.contentContainer.innerHTML = `
      <div class="content-heading">
        <h2 class="player-name">Christiano Ronaldo</h2>
        <div class="icons">
          <i class="fas fa-edit" id="edit-button"></i>
          <i class="fas fa-trash" id="delete"></i>
        </div>
      </div>
      <div class="player-info">
        <p>ue sequi aspernatur itaque illum ad reiciendis nulla, sunt ratione molestias commodi accusantium nobis sed.</p>
      </div>
    `;
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
