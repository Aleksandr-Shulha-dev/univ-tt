import { FC } from 'react';

import './styles.scss';

interface AvatarProps {
  source: string;
  isBig: boolean;
}
 
const Avatar: FC<AvatarProps> = ({ source, isBig }) => {
  const clazz = isBig ? "avatar avatar--big": "avatar avatar--little";
  return (
    <div className={clazz}>
      <img
        src={source}
        alt="player"
        className="avatar__img"
      />
    </div>
  );
}
 
export { Avatar };