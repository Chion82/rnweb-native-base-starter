const API_HOST = 'http://localhost:5000/api';

export default function (uri, method, data) {
	const url = API_HOST + '/' + uri;
	method = method.toUpperCase();

	const	fetchOptions = {
		method : method,
		body : method !== 'GET' ? JSON.stringify(data || {}) : undefined,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return new Promise((resolve, reject)=>{
		fetch(url, fetchOptions).then((response) => {
			return response.json();
		}).then((result) => {
			resolve.call(null, result);
		}).catch((error) => {
			reject.call(null, error || {});
		});
	});
}
