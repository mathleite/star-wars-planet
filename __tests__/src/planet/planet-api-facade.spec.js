import PlanetApiFacade from '../../../src/planet/facades/PlanetApiFacade.js';

describe('Should Search', () => {
  test('Search Planet with valid name', async () => {
    const expectedPlanetName = 'Tatooine';
    const api = new PlanetApiFacade();
    const { results } = await api.getPlanetByName(expectedPlanetName);
    results.forEach(planet => expect(planet.name).toEqual(expectedPlanetName));
  });
  test('Should not return a planet', async () => {
    const invalidPlanetName = 'test12';
    const api = new PlanetApiFacade();
    const { results } = await api.getPlanetByName(invalidPlanetName);
    expect([]).toEqual(results);
  });
});
