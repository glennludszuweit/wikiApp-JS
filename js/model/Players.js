class Players {
  setData(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default new Players();
