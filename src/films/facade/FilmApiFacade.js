import { swapiModule } from '../../utils/swapi.js';

class FilmApiFacade {
  getFilmsById(id) {
    return swapiModule.getFilm(id);
  }
}

export default FilmApiFacade;
