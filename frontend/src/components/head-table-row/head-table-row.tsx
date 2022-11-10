import { FC, useEffect } from 'react';
import { changeScoreToggleState } from '../../store/slice'
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeLocalStorageScoreState } from '../../helpers';

import './styles.scss';

interface HeadTableRowProps {
  isTableHeadFixed: boolean;
  setIsTableHeadFixed: (value: React.SetStateAction<boolean>) => void;
}
 
const HeadTableRow: FC<HeadTableRowProps> = (
  { isTableHeadFixed, setIsTableHeadFixed }
) => {
  const { isScoreByGrowth } = useAppSelector((state) => state.players);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 170 ? 
        setIsTableHeadFixed(true) :
        setIsTableHeadFixed(false); 
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const headRowClazz = isTableHeadFixed ? "head-row head-row--fixed" : "head-row"
  const arrowClazz = isScoreByGrowth ? "arrow arrow--down" : "arrow arrow--up";

  const handleClick = () => {
    dispatch(changeScoreToggleState());
    changeLocalStorageScoreState();
  }

  return (
    <tr className={headRowClazz}>
      <th className="head-row__cell">Player’s name</th>
      <th className="head-row__cell" onClick={handleClick}>
        <span className={arrowClazz}></span>
        <span>Score</span>
      </th>
    </tr>
  );
}
 
export { HeadTableRow };