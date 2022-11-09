import { store } from '../../store';

type RootState = ReturnType<typeof store.getState>;

interface IPlayer {
  id: string
	name: string
	avatar: string
	score: number
	bio: string
}

interface PlayersInitialState {
  playerList: IPlayer[]
}

export type { RootState, IPlayer, PlayersInitialState };