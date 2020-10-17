import PlayersView from '../view/PlayersView.js';

class UIController {
  init() {
    this.toggleMenu();
    this.search();
    this.listHighlight();
  }

  toggleMenu() {
    const logo = document.querySelector('.logo');
    const navigation = document.querySelector('.navigation');

    logo.addEventListener('click', () => {
      navigation.style.display =
        navigation.style.display === 'none' ? '' : 'none';
    });
  }

  search() {
    const search = document.getElementById('search');
    //select all names except home
    const names = document.querySelectorAll('.name:not(:first-child)');

    search.addEventListener('keyup', () => {
      let searchValue = search.value.toUpperCase();
      names.forEach((name) => {
        if (name.innerText.toUpperCase().indexOf(searchValue) > -1) {
          return (name.style.display = '');
        }
        return (name.style.display = 'none');
      });
    });
  }

  listHighlight() {}
}

export default new UIController();
