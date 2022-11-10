import { IPlayer } from '../common/types'

const parseLocalStorageList = (): IPlayer[] => {
  const playerList = localStorage.getItem('playerList');
  return playerList ? JSON.parse(playerList) : []
};

const parseLocalStorageScoreToggleState = (): boolean => {
  const isScoreByGrowth = localStorage.getItem('isScoreByGrowth');
  return !!isScoreByGrowth;
};

const changeLocalStorageScoreState = () => {
  const isScoreByGrowth = localStorage.getItem('isScoreByGrowth');
  if(isScoreByGrowth) {
    localStorage.removeItem('isScoreByGrowth');
  } else {
    localStorage.setItem('isScoreByGrowth', '1');
  }
}

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

const sortByGrowthFunc = (a: IPlayer, b: IPlayer):number => a.score - b.score;
const sortByDescendingFunc = (a: IPlayer, b: IPlayer):number => b.score - a.score;

export {
  parseLocalStorageList,
  updateLocalStorage,
  sortByGrowthFunc,
  sortByDescendingFunc,
  parseLocalStorageScoreToggleState,
  changeLocalStorageScoreState
}