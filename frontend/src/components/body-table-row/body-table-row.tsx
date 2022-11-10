import { FC } from 'react';
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
  const clazz = isTableHeadFixed ? "body-row body-row--scroll": "body-row"
  return (
    <tr className={clazz}>
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