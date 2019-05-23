import { applyMiddleware, createStore, compose } from 'redux';
import type { Store } from 'redux';
import reducers, { type RootState } from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import type { IActionType } from '../constants';

export type Reducers = typeof reducers;
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type State = $ObjMap<RootState, $ExtractFunctionReturn>;

/* const middlewares = (process.env.REACT_APP_API_ENV === 'production' ?
  applyMiddleware(thunk) : applyMiddleware(thunk, logger)); */
const middlewares = compose(applyMiddleware(thunk, logger));

export const configureStore: Store<State, IActionType> = createStore(reducers, middlewares);

/* declare export function createStore<S, A, D>(
  reducer: Reducer<S, A>,
  enhancer?: StoreEnhancer<S, A, D>
): Store<S, A, D>; */

export default configureStore;
