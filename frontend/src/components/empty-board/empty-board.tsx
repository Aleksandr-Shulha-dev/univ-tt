import { FC } from 'react';

import spiner from '../../assets/images/spiner.svg'

import './styles.scss';
 
const EmptyBoard: FC = () => {
  return (
    <div className="empty-board">
      <h2 className="empty-board__title">No players available</h2>
      <img
        src={spiner}
        alt="spiner"
        className="empty-board__spiner"
      />
    </div>
  );
}
 
export { EmptyBoard };