import express from 'express';

import { routes } from './routes';

const port = process.env.PORT || 3333;
const server = express();

server
  .use(express.json())
  .use(routes)
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })