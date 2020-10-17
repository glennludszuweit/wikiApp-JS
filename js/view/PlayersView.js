export default class PlayersView {
  navigation() {
    return `
      <div class="search-container">
        <input type="search" id="search" placeholder="search player">
      </div>
      <ul>
        <li><p>Christiano Ronaldo</p></li>
      </ul>
    `;
  }

  content() {
    return `
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
    return `
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
  }

  editForm(playerName, playerInfo) {
    return `
      <h1>Add Player</h1>
      <form action="">
        <input id="name" type="text" placeholder="players name" value="${playerName.textContent}" required>
        <div id="description">${playerInfo.innerText}</div>
        <div class="buttons">
          <button id="cancel">Cancel</button>
          <button id="submit">Submit</button>
        </div>
      </form>
    `;
  }

  summerNote() {
    return {
      placeholder: "players description ...",
      tabsize: 2,
      height: 300,
      toolbar: [
        ["style", ["style"]],
        ["font", ["bold", "underline", "clear"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["view", ["codeview", "help"]],
      ],
    };
  }

  toggleMenu(display) {
    return display === "none" ? "" : "none";
  }
}
