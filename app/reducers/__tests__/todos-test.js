import expect from 'expect';
import reducer from '../todos';

const mockGetTodosResponse = [{
  "id": 3,
  "isCompleted": false,
  "title": "Learn CSS"
}];

describe('todos reducer', () => {
	it('todos/get', () => {
		expect(
			reducer({}, {
				type : 'todos/get'
			})
		).toEqual({
			isLoading : true
		});
	});

	it('todos/get/success', () => {
		expect(
			reducer({}, {
				type : 'todos/get/success',
				response : mockGetTodosResponse
			})
		).toEqual({
			isLoading : false,
			list : [
        {
          "id": 3,
          "isCompleted": false,
          "title": "Learn CSS"
        }
	    ]
		});
	});

	it('todos/add', () => {
		expect(
			reducer({
				isLoading : false,
				list : [{
          "id": 3,
          "isCompleted": false,
          "title": "Learn CSS"
        }]
			}, {
				type : 'todos/add',
				todo : {
					title : 'Added todo.',
					id : 999
				}
			})
		).toEqual({
			isLoading : true,
			list : [
				{
          "id": 3,
          "isCompleted": false,
          "title": "Learn CSS"
        }, {
					title : 'Added todo.',
					id : 999
				}
			]
		});
	});

	it('todos/delete', () => {
		expect(reducer({
			isLoading : false,
			list : [
				{
					id : 1,
					title : 'haha'
				}, {
					id : 2,
					title : 'heihei'
				}
			]
		}, {
			type : 'todos/delete',
			todo : {
				id : 2,
				title : 'heihei'
			}
		})).toEqual({
			isLoading : true,
			list : [{
				id : 1,
				title : 'haha'
			}]
		});
	});
});
