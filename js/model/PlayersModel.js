import LSController from '../controller/LSController.js';

class PlayersModel {
  constructor() {
    this.data = LSController.GET('players');
  }

  id() {
    let ids = this.data.map((player) => {
      return player.id;
    });
    return ids;
  }

  name() {
    let names = this.data.map((player) => {
      return player.name;
    });
    return names;
  }

  description() {
    let description = this.data.map((player) => {
      return player.description;
    });
    return description;
  }
}

export default new PlayersModel();
