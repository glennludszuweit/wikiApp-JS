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

  search() {}

  listHighlight() {}
}

export default new UIController();
