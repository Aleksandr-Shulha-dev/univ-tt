import { Router } from 'express';
import { Api } from '../common/enums';
import { getPlayers } from './../controllers/index';

export const playersData = Router();

playersData.get(Api.STREAM, getPlayers);
