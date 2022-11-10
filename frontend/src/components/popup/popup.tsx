import { FC,useState, useEffect } from 'react';
import { Avatar } from '../avatar/avatar';
import { useAppSelector } from '../../hooks/store';
import { useParams, useNavigate } from 'react-router-dom';

import { IPlayer } from '../../common/types';
import { AppRouter } from '../../common/enums';

import './styles.scss';
 
const Popup: FC = () => {
  const [ player, setPlayer ] = useState<IPlayer | null>(null)
  const { playerList } = useAppSelector((state) => state.players);
  let { playerName } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const [ playerData ] = playerList.filter(({ name }) => playerName === name);
    playerData ? setPlayer(playerData) : navigate(AppRouter.MAIN);
  }, [])

  const handleClick = (e :React.MouseEvent<HTMLElement>) => {
    navigate(AppRouter.MAIN);
  }

  if(!player) return null;

  return (
    <div className="wrapper" onClick={handleClick}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup__content">
          <Avatar
            isBig={true}
            source={player.avatar}
          />
          <h2 className="popup__content-name">{player.name}</h2>
          <p className="popup__content-score">Score: {player.score}</p>
          <p className="popup__content-bio">{player.bio}</p>
        </div>
        <button className="btn" onClick={handleClick}>
          &#10006; Close
        </button>
      </div>
    </div>
  );
}
 
export { Popup };