import LSController from '../controller/LSController.js';

class PlayersModel {
  constructor() {
    this.data = LSController.GET('players');
  }

  playersName() {
    let names = this.data.map((player) => {
      return player.name;
    });
    return names;
  }

  playersDescription() {
    let description = this.data.map((player) => {
      return player.description;
    });
    return description;
  }
}

export default new PlayersModel();
