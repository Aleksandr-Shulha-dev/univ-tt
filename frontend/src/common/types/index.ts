import { store } from '../../store';

type RootState = ReturnType<typeof store.getState>;

interface IPlayer {
  id: string
	name: string
	avatar: string
	score: number
	bio: string
}

interface StoreInitialState {
  playerList: IPlayer[];
	isScoreByGrowth: boolean;	
}

export type { RootState, IPlayer, StoreInitialState };