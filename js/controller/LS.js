import Players from '../model/Players.js';

class LS {
  SET(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  GET(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  REMOVE(key) {
    return localStorage.removeItem(key);
  }

  checkValue() {
    if (this.GET('players') === null) {
      Players.playersData = this.initialValue();
      location.reload();
    } else {
      Players.playersData = this.GET('players');
    }
  }

  initialValue() {
    return this.SET('players', [
      {
        id: 0,
        name: 'Home',
        description:
          '<div style="text-align: center; margin: 50px;"><img src="./img/flyball.png" alt="wikipedia" /></dv><h1>Welcome to Football Players Wikipedia!',
      },
    ]);
  }
}

export default new LS();
