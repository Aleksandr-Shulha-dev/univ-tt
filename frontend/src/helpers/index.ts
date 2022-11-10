import { IPlayer } from '../common/types'

const parseLocalStorage = (): IPlayer[] => {
  const playerList = localStorage.getItem('playerList');
  return playerList ? JSON.parse(playerList) : []
};

const updateLocalStorage = (newPlayer: IPlayer) => {
  const playerListJson = localStorage.getItem('playerList');
  if(playerListJson) {
    const playerList: IPlayer[] = JSON.parse(playerListJson);
    playerList.push(newPlayer);
    localStorage.setItem('playerList', JSON.stringify(playerList));
  } else {
    localStorage.setItem('playerList', JSON.stringify([ newPlayer ]));
  }
}

const sortByGrowthFunc = (a: IPlayer, b: IPlayer):number => b.score - a.score;
const sortByDescendingFunc = (a: IPlayer, b: IPlayer):number => a.score - b.score;

export {
  parseLocalStorage,
  updateLocalStorage,
  sortByGrowthFunc,
  sortByDescendingFunc
}