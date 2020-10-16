import PlayersView from '../view/playersView.js';

export default class UIController extends PlayersView {
  init() {
    this.toggleMenu();
    this.search();
    this.listHighlight();
  }

  toggleMenu() {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      this.navigation.style.display =
        this.navigation.style.display === 'none' ? '' : 'none';
    });
  }

  search() {}

  listHighlight() {}
}
