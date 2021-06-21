import { PlanetModel } from '../../../src/planet/models/Planet.js';

describe('Should Fill Planet Model', function () {
  test('When Given a name', () => {
    const expectedName = 'Test name';
    const model = new PlanetModel({ name: expectedName });
    expect(model.name).toEqual(expectedName);
  });
  test('When Given a climate', () => {
    const climate = 'Test Climate';
    const model = new PlanetModel({ climate: climate });
    expect(model.climate).toEqual(climate);
  });
  test('When Given a ground', () => {
    const expectedGround = 'Test Ground';
    const model = new PlanetModel({ ground: expectedGround });
    expect(model.ground).toEqual(expectedGround);
  });
});
