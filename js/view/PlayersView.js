import LS from '../model/LS.js';
import Players from '../model/Players.js';

class PlayersView {
  constructor() {
    this.player;
    this.data = LS.GET('players');
    this.namesContainer = document.querySelector('.names');
    this.contentContainer = document.querySelector('.content');
  }

  listView() {
    LS.checkValue();
    let output = this.data.map((player) => {
      return `
          <li class="name">${player.name}<span id="player-id" style="display: none">${player.id}</span></li>
        `;
    });
    this.namesContainer.innerHTML = output.join('');
  }

  homeView() {
    this.contentContainer.innerHTML = `
      <span id="player-info-id" style="display: none">0</span>
      <div class="icons" style="display: none">
        <i class="fas fa-edit edit-button"></i>
        <i class="fas fa-trash delete"></i>
      </div>
      <div class="player-info">${this.data[0].description}</div>
    `;
  }

  playerView() {
    this.namesContainer.addEventListener('click', (e) => {
      e.preventDefault();
      const id = Number(e.target.children[0].textContent);

      this.data.filter((player) => {
        if (player.id === id) {
          this.contentContainer.innerHTML = `
            <div class="content-heading">
            <span id="player-info-id" style="display: none">${player.id}</span>
              <h2 class="player-name">${player.name}</h2>
              <div class="icons">
                <i class="fas fa-edit edit-button"></i>
                <i class="fas fa-trash delete"></i>
              </div>
            </div>
            <div class="player-info">${player.description}</div>
          `;
          Players.edit();
        } else if (!player.id || id === 0) {
          this.homeView();
        }
      });
    });

    this.homeView();
    Players.edit();
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

    this.summerNote('#description');
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

    this.summerNote('#description');
  }

  summerNote(id) {
    $(id).summernote({
      placeholder: 'players description ...',
      tabsize: 2,
      height: 300,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['codeview', 'help']],
      ],
    });
  }
}

export default new PlayersView();
