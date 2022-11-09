import express, { Express } from 'express';
import cors from 'cors';
import { ENV, Api } from './common/enums'
import { playersData } from './routes';
import { errorsHandler } from './middlewares/error'

const app: Express = express();

app.use(cors({ origin: "*" }));

app.use(Api.BASE, playersData);

app.use(errorsHandler);

app.listen(ENV.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${ENV.PORT}`);
});