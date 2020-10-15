import playersView from '../view/playersView.js'

class PlayersController {
  constructor() {
    this.addBtn = document.getElementById('add-button');
  }

  init() {
    playersView.list()
    playersView.info()
    this.add()
  }

  add() {
    this.addBtn.addEventListener('click', () => {
      playersView.add()
    })
  }

  edit() {

  }
}

export default new PlayersController();