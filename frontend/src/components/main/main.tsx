import { FC } from 'react';
import { Board } from '../board/board';

import './styles.scss';
 
const Main: FC = () => {
  return (
    <main className="main">
      <h1 className="title">Score board</h1>
      <Board />
    </main>
  );
}
 
export { Main };