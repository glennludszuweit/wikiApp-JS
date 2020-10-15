class PlayersView {
  constructor() {
    this.navigation = document.querySelector('.navigation');
    this.contentContainer = document.querySelector('.content');
  }

  list() {
    this.navigation.innerHTML = `
      <input type="search" id="search" placeholder="search player">
      <ul>
        <li><p>Cristiano Ronaldo</p></li>
      </ul>
    `
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
    `
  }

  add () {
    this.contentContainer.innerHTML = `
      <h1>Add Player</h1>
      <form action="">
        <input id="name" type="text" placeholder="players name" required>
        <div id="description"></div>
        <div class="buttons">
          <button id="cancel">Cancel</button>
          <button id="submit">Submit</button>
        </div>
      </form>
    `;

    $('#description').summernote({
      placeholder: 'players description ...',
      tabsize: 2,
      height: 300,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['view', ['codeview', 'help']]
      ]
    });
  }

  edit() {
    const playerName = document.querySelector('.player-name');
    const playerInfo = document.querySelector('.player-info');

    this.contentContainer.innerHTML = `
      <h1>Add Player</h1>
      <form action="">
        <input id="name" type="text" placeholder="players name" value=${playerName.innerText} required>
        <div id="description">${playerInfo.innerText}</div>
        <div class="buttons">
          <button id="cancel">Cancel</button>
          <button id="submit">Submit</button>
        </div>
      </form>
    `;

    $('#description').summernote({
      placeholder: 'players description ...',
      tabsize: 2,
      height: 300,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['view', ['codeview', 'help']]
      ]
    });
  }
}

export default new PlayersView();