import PlayersController from './controller/PlayersController.js';
import UIController from './controller/UIController.js';

import PlayerModel from './model/PlayersModel.js';

PlayersController.init();
UIController.init();

console.log(PlayerModel.id());
console.log(PlayerModel.name());
console.log(PlayerModel.description());
