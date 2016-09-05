import expect from 'expect';
import { call, put } from 'redux-saga/effects';
import { getTodos, addTodo, deleteTodo } from '../todos';
import apiCall from '../../services/apiCall';

const fakeResponse = {
  "todos": [
    {
      "id": 3,
      "isCompleted": false,
      "title": "Learn CSS"
    },
    {
      "id": 4,
      "isCompleted": false,
      "title": "Learn HTML"
    },
    {
      "id": 5,
      "isCompleted": false,
      "title": "Learn JavaScript"
    }
  ]
};

const fakeTodo = {
	"id": 3,
	"isCompleted": false,
	"title": "Learn CSS"
};

describe('todos saga', () => {

	it('getTodos() success', () => {
		const generator = getTodos()
		expect(generator.next().value).toEqual(call(apiCall,'todos', 'GET'));
		expect(generator.next(fakeResponse).value).toEqual(put({
			type : 'todos/get/success',
			response : fakeResponse
		}));
	});

	it('getTodos() failed', () => {
		const generator = getTodos()
		const err = 'Fake Error';
		expect(generator.next().value).toEqual(call(apiCall,'todos', 'GET'));
		expect(generator.throw(err).value).toEqual(put({
			type : 'todos/get/failed',
			err
		}));
	});

	it('addTodo()', () => {
		const generator = addTodo({
			type : 'todos/add',
			todo : fakeTodo
		});
		expect(generator.next().value).toEqual(call(apiCall, 'todos', 'POST', {todo : fakeTodo}));
	});

	it('deleteTodo()', () => {
		const generator = deleteTodo({
			type : 'todos/delete',
			todo : fakeTodo
		});
		expect(generator.next().value).toEqual(call(apiCall, `todos/${fakeTodo.id}`, 'DELETE'));
	});
});
