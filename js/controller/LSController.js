class LSController {
  SET(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  GET(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default new LSController();
