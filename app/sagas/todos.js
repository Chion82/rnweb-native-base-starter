import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import apiCall from '../services/apiCall';

export function* getTodos() {
  try {
    const response = yield call(apiCall, 'todos', 'GET');
    yield put({
      type : 'todos/get/success',
      response
    });
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    yield put({
      type : 'todos/get/failed',
      err
    });
  }
}

export function* addTodo(action) {
  try {
    yield call(apiCall, 'todos', 'POST', {
      todo : action.todo
    });
    yield put({
      type : 'todos/add/success'
    });
    yield put({
      type : 'todos/get'
    });
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    yield put({
      type : 'todos/add/failed',
      err
    });
  }
}

export function* deleteTodo(action) {
  try {
    yield call(apiCall, `todos/${action.todo.id}`, 'DELETE');
    yield put({
      type : 'todos/delete/success'
    });
    yield put({
      type : 'todos/get'
    });
  } catch (err) {
    //console.error(err);
    yield put({
      type : 'todos/delete/failed',
      err
    });
  }
}

function* watchTodosGet() {
  yield takeLatest('todos/get', getTodos);
}

function* watchTodoAdd() {
  yield takeLatest('todos/add', addTodo);
}

function* watchTodoDelete() {
  yield takeLatest('todos/delete', deleteTodo);
}

export default function* () {
  yield fork(watchTodosGet);
  yield fork(watchTodoAdd);
  yield fork(watchTodoDelete);
}
