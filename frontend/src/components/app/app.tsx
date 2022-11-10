import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppRouter } from '../../common/enums';
import { Main } from '../main/main';
import './styles.scss';
 
const App: FC = () => {
  return (
    <Routes>
      <Route path={AppRouter.MAIN} element={<Main />}/>
      <Route
        path={`${AppRouter.PLAYER}/:playerName`}
        element={<Main isPlayerPage={true}/>}
      />
      <Route path={AppRouter.OTHER} element={<Navigate to={AppRouter.MAIN} />}/>
    </Routes>
  );
}
 
export { App };