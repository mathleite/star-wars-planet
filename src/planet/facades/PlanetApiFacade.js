import { swapiModule } from '../../utils/swapi.js';

class PlanetApiFacade {
  getPlanetByName(name = '') {
    return swapiModule.getPlanets({ search: name });
  }
}

export default PlanetApiFacade;
