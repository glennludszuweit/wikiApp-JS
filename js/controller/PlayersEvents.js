import playersUI from '../view/PlayersUI.js'

class PlayersController {
  constructor() {
    this.addBtn = document.getElementById('add-button');
  }

  init() {
    playersUI.list()
    playersUI.info()
    this.add()
  }

  add() {
    this.addBtn.addEventListener('click', () => {
      playersUI.add()
    })
  }

  edit() {

  }
}

export default new PlayersController();