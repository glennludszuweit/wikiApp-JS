import LSController from '../controller/LSController.js';

class PlayersModel {
  constructor() {
    this.data = LSController.GET('players');
  }

  playerName() {
    let names = this.data.map((player) => {
      return player.name;
    });
    return names;
  }

  playerDescription() {
    let description = this.data.map((player) => {
      return player.description;
    });
    return description;
  }
}

export default new PlayersModel();
