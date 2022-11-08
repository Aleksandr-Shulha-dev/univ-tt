import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../common/types';
import { AppDispatch } from './../../store/index';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };