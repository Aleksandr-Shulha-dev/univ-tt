import { Router } from 'express';
import { Api } from '../common/enums';
import { getPlayers } from './../controllers/index';
import { setHeaderMiddleware } from '../middlewares/header'

export const playersData = Router();

playersData.get(Api.STREAM, setHeaderMiddleware, getPlayers);
