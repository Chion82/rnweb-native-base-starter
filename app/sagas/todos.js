import { takeLatest } from 'redux-saga';
import { call, put, fork, cancel } from 'redux-saga/effects';
import apiCall from '../services/apiCall';

function* getTodos() {
	try {
		const response = yield call(apiCall, 'todos', 'GET');
		yield put({
			type : 'todos/get/success',
			response
		});
	} catch (err) {
		console.error(err);
		yield put({
			type : 'todos/get/failed',
			err
		})
	}
}

function* addTodo(action) {
	try {
		const response = yield call(apiCall, 'todos', 'POST', {
			todo : action.todo
		});
		yield put({
			type : 'todos/add/success'
		});
		yield put({
			type : 'todos/get'
		})
	} catch (err) {
		console.error(err);
		yield put({
			type : 'todos/add/failed',
			err
		})
	}
}

function* watchTodosGet() {
	yield takeLatest('todos/get', getTodos);
}

function* watchTodoAdd() {
	yield takeLatest('todos/add', addTodo);
}

export default function* () {
	yield fork(watchTodosGet);
	yield fork(watchTodoAdd);
}
