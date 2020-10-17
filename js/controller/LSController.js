import PlayersController from './PlayersController.js';

class LSController {
  SET(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  GET(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  checkValue() {
    if (this.GET('players') === null) {
      PlayersController.playersData = this.initialValue();
    } else {
      PlayersController.playersData = this.GET('players');
    }
  }

  initialValue() {
    return this.SET('players', [
      {
        id: '0',
        name: 'Home',
        description: '<h1>Welcome to Football Players Wikipedia!',
      },
    ]);
  }
}

export default new LSController();
