class PlayersView {
  constructor() {
    this.navigation = document.querySelector('.navigation');
    this.contentContainer = document.querySelector('.content');
  }

  list() {
    this.navigation.innerHTML = `
      <input type="search" id="search" placeholder="search player">
      <ul>
        <li><p>Cristiano Ronaldo</p></li>
      </ul>
    `
  } 

  info() {
    this.contentContainer.innerHTML = `
      <div class="content-heading">
      <h2>Christiano Ronaldo</h2>
      <div class="icons">
        <i class="fas fa-edit edit"></i>
        <i class="fas fa-trash delete"></i>
      </div>
      </div>
      <div class="player-info">
        <div class="player-info__head">
          <button>style of play</p>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam consectetur unde blanditiis harum quae, doloribus atque iste veniam hic, animi soluta laudantium deleniti illum necessitatibus. Et itaque qui doloribus soluta, pariatur aperiam molestias quibusdam deserunt eveniet voluptas quo, voluptatum, officia veritatis sint aut! Veniam mollitia voluptatum similique cumque quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia cumque sequi aspernatur itaque illum ad reiciendis nulla, sunt ratione molestias commodi accusantium nobis sed.</p>
      </div>
      <div class="player-info">
        <div class="player-info__head">
          <button>reception</p>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam consectetur unde blanditiis harum quae, doloribus atque iste veniam hic, animi soluta laudantium deleniti illum necessitatibus. Et itaque qui doloribus soluta, pariatur aperiam molestias quibusdam deserunt eveniet voluptas quo, voluptatum, officia veritatis sint aut! Veniam mollitia voluptatum similique cumque quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia cumque sequi aspernatur itaque illum ad reiciendis nulla, sunt ratione molestias commodi accusantium nobis sed.</p>
      </div>
      <div class="player-info">
        <div class="player-info__head">
          <button>team history</p>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam consectetur unde blanditiis harum quae, doloribus atque iste veniam hic, animi soluta laudantium deleniti illum necessitatibus. Et itaque qui doloribus soluta, pariatur aperiam molestias quibusdam deserunt eveniet voluptas quo, voluptatum, officia veritatis sint aut! Veniam mollitia voluptatum similique cumque quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia cumque sequi aspernatur itaque illum ad reiciendis nulla, sunt ratione molestias commodi accusantium nobis sed.</p>
      </div>
    `
  }

  add () {
    this.contentContainer.innerHTML = `
      <h1>Add Player</h1>
      <form action="">
        <input id="name" type="text" required>
        <div id="description"></div>
        <button>Cancel</button>
        <button>Submit</button>
      </form>
    `;

    $('#description').summernote({
      placeholder: 'Hello stand alone ui',
      tabsize: 2,
      height: 300,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ]
    });
  }

  edit() {

  }
}

export default new PlayersView();