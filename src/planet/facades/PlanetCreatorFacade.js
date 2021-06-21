import { PlanetModel } from '../models/Planet.js';
import PlanetApiFacade from './PlanetApiFacade.js';
import FilmApiFacade from '../../films/facade/FilmApiFacade.js';

class PlanetCreatorFacade {
  constructor(planetData) {
    this.planet = new PlanetModel(planetData);
  }

  create() {
    return this.planet.save()
      .then(r => {
        const api = new PlanetApiFacade()
        api.getPlanetByName(this.planet.name)
          .then(({ results }) => {
            const [planet] = results;

            if (!planet || !planet.hasOwnProperty('films')) return;

            planet.films.map((film) => {
              const api = new FilmApiFacade();
              api.getFilmsById(parseInt(film.replace(/\D/g, "")))
                .then(async ({title, release_date}) => {
                  this.planet.films.push({title: title, release_date: release_date});
                  await this.planet.save();
                })
            });
          })
        return r;
      });
  }
}

export default PlanetCreatorFacade;
