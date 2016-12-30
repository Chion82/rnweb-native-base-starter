// eslint-disable-next-line
const API_HOST = process.env.API_HOST || 'http://localhost:3001/api';

function getRequestArgs(obj) {
  let paramArray = [];
  for (let key in obj) {
    paramArray.push(key + '=' + encodeURIComponent(obj[key]));
  }
  return paramArray.join('&');
}

export default function (uri, method, data) {
  let url = API_HOST + '/' + uri;
  method = method.toUpperCase();

  const  fetchOptions = {
    method : method,
    body : method !== 'GET' ? JSON.stringify(data || {}) : undefined,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method === 'GET' && data) {
    url += '?' + getRequestArgs(data);
  }

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
