import config from '../config';

export const apiService = {
	loadClients
}

/**
 * Load clients function
 * Fetches data from server
 * 
 * @returns {fetch} fetch object
 */
function loadClients() {	
	const requestOptions = {
		method : 'GET',
		headers: { 
			'Content-Type'  : 'application/json',
		},
	}

	return fetch(`${config.apiUrl}clients.json`, requestOptions)
		.then(handleResponse)
		.then(res => {
			var clients = [];
			if(res.success){
				clients = res.clients;
			}

			return clients;
		})
}

/**
 * Convert and format fetch request data
 * 
 * @param {fetch} response 
 * @returns {json} formatted data
 */
function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if(!response.ok) {
			const error = (data || data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}