import { FC, useEffect } from 'react';
import { updateLocalStorage } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks/store' 
import { setPlayer } from '../../store/slice';
import { EmptyBoard } from '../empty-board/empty-board';
import { Table } from '../table/table';

import './styles.scss';
 
const Board: FC = () => {
  const { playerList } = useAppSelector((state) => state.players);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      const evtSource = new EventSource("http://localhost:8001/stream");
      evtSource.onmessage = (message) => {
        if(message.lastEventId === "-1") {
          evtSource.close();
          return;
        }
        const newPlayer = JSON.parse(message.data);
        dispatch(setPlayer(newPlayer));
        updateLocalStorage(newPlayer);
      }
    }
  }, [])

  return (
    <div className="board" id="broad">
      {
        playerList.length === 0 ?
          <EmptyBoard /> :
          <Table />
      }
    </div>
  );
}
 
export { Board };