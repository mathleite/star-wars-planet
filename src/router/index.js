import express from 'express';
import { routes } from '../planet/routes/index.js';

const app = express();
const port = 80;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/planet', routes());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
