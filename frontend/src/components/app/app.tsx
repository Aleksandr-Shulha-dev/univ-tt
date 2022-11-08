import { FC } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AppRouter } from '../../common/enums';
import { Main } from '../main/main';
import './styles.scss';
 
const App: FC = () => {
  return (
    <Routes>
      <Route path={AppRouter.MAIN} element={<Main />}/>
    </Routes>
  );
}
 
export { App };