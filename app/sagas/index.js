import { fork } from 'redux-saga/effects';
//Import all sagas
import todos from './todos';

export default function* root() {
  yield fork(todos);
  //Fork and yield other sagas here if you have more
}
