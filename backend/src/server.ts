import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { ENV, Api } from './common/enums'
import { playersData } from './routes';

const app: Express = express();

app
    .use(cors({ origin: "*" }))
    .use(express.json());

app.use(Api.BASE, playersData);


app.listen(ENV.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${ENV.PORT}`);
});