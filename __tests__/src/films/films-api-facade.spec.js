import FilmApiFacade from '../../../src/films/facade/FilmApiFacade.js';

describe('Should Search', () => {
  test('Search Films with valid ids', async () => {
    const validFilmIds = [
      1, 3, 4, 5, 6
    ];

    const api = new FilmApiFacade();

    for (const id of validFilmIds) {
      const film = await api.getFilmsById(id);
      expect(film).not.toBeNull();
      expect(film).toBeTruthy();
      expect(film.title).toBeTruthy();
    }
  });

  test('Search Films with invalid ids', async () => {
    const validFilmIds = [
      1432432423, 3432432432, '73y423hbh'
    ];

    const api = new FilmApiFacade();

    for (const id of validFilmIds) {
      const film = await api.getFilmsById(id);
      expect(film.detail).toEqual('Not found');
    }
  });
});
