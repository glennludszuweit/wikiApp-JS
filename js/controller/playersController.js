import playersView from '../view/playersView.js'

class PlayersController {

  init() {
    playersView.list()
    playersView.info()
    this.add()
    this.edit()
  }

  add() {
    document.getElementById('add-button').addEventListener('click', () => {
      playersView.add()
    })
  }

  edit() {
    document.getElementById('edit-button').addEventListener('click', () => {
      playersView.edit()
    })
  }
}

export default new PlayersController();