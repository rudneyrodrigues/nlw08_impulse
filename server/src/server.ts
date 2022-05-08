import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const port = process.env.PORT || 3333;
const server = express();

server
  .use(cors())
  .use(express.json())
  .use(routes)
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })