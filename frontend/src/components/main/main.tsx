import { FC } from 'react';
import { Board } from '../board/board';
import { Popup } from '../popup/popup';

import './styles.scss';

interface MainProps {
  isPlayerPage?: boolean;
}
 
const Main: FC<MainProps> = ({ isPlayerPage }) => {
  return (
    <main className="main">
      <h1 className="title">Score board</h1>
      <Board />
      {isPlayerPage && <Popup />}
    </main>
  );
}
 
export { Main };