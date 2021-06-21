import express from 'express';
import PlanetController from '../controllers/PlanetController.js';


export const routes = () => {
  const router = express.Router();
  router.post('/', async (req, res) => {
    try {
      res.send(await PlanetController.create(req.body));
    } catch (err) {
      res.send({
        error: err,
      });
    }
  });
  router.get('/', async (req, res) => {
    try {
      res.send(await PlanetController.index(req.params));
    } catch (err) {
      res.send({ error: err });
    }
  })
  router.delete('/:id', async (req, res) => {
    try {
      res.json(await PlanetController.delete(req.params));
    } catch (err) {
      res.json({ error: err });
    }
  })
  router.get('/find', async (req, res) => {
    try {
      res.json(await PlanetController.find(req.query));
    } catch (err) {
      res.json({ error: err });
    }
  })
  return router;
};


