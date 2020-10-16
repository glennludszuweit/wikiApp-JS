class UI {
  toggleMenu() {
    const logo = document.querySelector('.logo');
    const navigation = document.querySelector('.navigation');

    logo.addEventListener('click', () => {
      navigation.style.display =
        navigation.style.display === 'none' ? '' : 'none';
    });
  }
}

export default new UI();
