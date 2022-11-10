import { FC } from 'react';
import { useNavigate } from "react-router-dom";
import { AppRouter } from '../../common/enums';
import { Avatar } from '../avatar/avatar';
import './styles.scss';

interface BodyTableRowProps {
  id: string;
  name: string;
  avatar: string;
  score: number;
  isTableHeadFixed?: boolean
}
 
const BodyTableRow: FC<BodyTableRowProps> = (
  { id, name, avatar, score, isTableHeadFixed }
) => {
  const navigate = useNavigate();
  const clazz = isTableHeadFixed ? "body-row body-row--scroll": "body-row";

  const handleClick = () => {
    navigate(`${AppRouter.PLAYER}/${name}`)
  }

  return (
    <tr className={clazz} onClick={handleClick}>
      <td className="body-row__cell">
        <Avatar
          source={avatar}
          isBig={false}
        />
      </td>
      <td className="body-row__cell">{name}</td>
      <td className="body-row__cell">{score}</td>
    </tr>
  );
}
 
export { BodyTableRow };