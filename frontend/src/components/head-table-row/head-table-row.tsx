import { FC, useEffect } from 'react';
import './styles.scss';

interface HeadTableRowProps {
  sortToggle: (value: React.SetStateAction<boolean>) => void;
  isByGrowth: boolean;
  isTableHeadFixed: boolean;
  setIsTableHeadFixed: (value: React.SetStateAction<boolean>) => void;
}
 
const HeadTableRow: FC<HeadTableRowProps> = (
  { sortToggle, isByGrowth, isTableHeadFixed, setIsTableHeadFixed }
) => {

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
  const arrowClazz = isByGrowth ? "arrow arrow--up" : "arrow arrow--down";

  const handleClick = () => {
    sortToggle((state: boolean) => !state)
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