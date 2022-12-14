import { FC, useState } from 'react';
import { HeadTableRow } from '../head-table-row/head-table-row';
import { BodyTableRow } from '../body-table-row/body-table-row';
import { useAppSelector} from '../../hooks/store';
import {
  sortByGrowthFunc,
  sortByDescendingFunc,
} from '../../helpers';

import './styles.scss';
 
const Table: FC = () => {
  const { isScoreByGrowth } = useAppSelector((state) => state.players)
  const [isTableHeadFixed, setIsTableHeadFixed] = useState(false);
  const { playerList } = useAppSelector((state) => state.players);
 
  const sortFunc = isScoreByGrowth ? sortByGrowthFunc : sortByDescendingFunc;

  return (
    <table className="table">
      <thead>
        <HeadTableRow
          setIsTableHeadFixed={setIsTableHeadFixed}
          isTableHeadFixed={isTableHeadFixed}
        />
      </thead>
      <tbody>
        { 
          [...playerList]
            .sort(sortFunc)
            .map(({ bio, ...mainInfo }, index) => 
              index === 0 ?
              (<BodyTableRow
                key={mainInfo.id}
                {...mainInfo}
                isTableHeadFixed={isTableHeadFixed}
              />) :
              (<BodyTableRow key={mainInfo.id} {...mainInfo} />)
            )
        }
      </tbody>
    </table>
  );
}
 
export { Table };