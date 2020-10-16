export default class PlayersModel {
  setData(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
