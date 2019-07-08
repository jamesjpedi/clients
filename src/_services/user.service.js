import { authHeader } from '../_helpers';
import config from '../config';

export const userService = {
	login,
	logout,
	getPosts,
	deletePost,
	getUsers,
	getUser,
	deleteUser,
	updateUser,
	getKeywords
}


function login(username, password) {
	const requestOptions = {
		method : 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ 
			email     : username, 
			password  : password
		})
	}

	return fetch(`${config.apiUrl}/admin/signin`, requestOptions)
		.then(handleResponse)
		.then(res => {
			var user = {};
			if(res.success){
				user = res.user;
				if(user.token){
					localStorage.setItem('user', JSON.stringify(user));
				}
			}

			return user;
		});
}

function logout() {
	localStorage.removeItem('user');
}

function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if(!response.ok) {
			if(response.status === 401) {
				logout();
				window.location.reload(true);
			}

			const error = (data || data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}

function getPosts() {
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;
	
	const requestOptions = {
		method : 'GET',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
	}

	return fetch(`${config.apiUrl}/admin/posts`, requestOptions)
		.then(handleResponse)
		.then(res => {
			var posts = [];
			if(res.success){
				posts = res.posts;
			}

			return posts;
		})
}

function deletePost(postId) {
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;

	const requestOptions = {
		method : 'DELETE',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
	}

	return fetch(`${config.apiUrl}/admin/post/${postId}`, requestOptions)
		.then(handleResponse)
		.then(res => {
			return res;
		})
}

function getUsers() {
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;
	
	const requestOptions = {
		method : 'GET',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
	}

	return fetch(`${config.apiUrl}/admin/users`, requestOptions)
		.then(handleResponse)
		.then(res => {
			var posts = [];
			if(res.success){
				posts = res.posts;
			}

			return posts;
		})
}

function getUser(userId){
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;

	const requestOptions = {
		method : 'GET',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
	}

	return fetch(`${config.apiUrl}/admin/user/${userId}`, requestOptions)
		.then(handleResponse)
		.then(res => {
			return res;
		})
}

function deleteUser(userId) {
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;

	const requestOptions = {
		method : 'DELETE',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
	}

	return fetch(`${config.apiUrl}/admin/user/${userId}`, requestOptions)
		.then(handleResponse)
		.then(res => {
			return res;
		})
}

function updateUser(userId, data) {
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;

	const requestOptions = {
		method : 'POST',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
		body: JSON.stringify(data)
	}

	return fetch(`${config.apiUrl}/admin/updateUser/${userId}`, requestOptions)
		.then(handleResponse)
		.then(res => {
			return res
		});
}

function getKeywords(){
	let token = JSON.parse(localStorage.getItem('user'));
	token = token.token;

	const requestOptions = {
		method : 'GET',
		headers: { 
			'Content-Type'  : 'application/json',
			'Authorization' : 'Bearer '+token
		},
	}

	return fetch(`${config.apiUrl}/admin/keywords`, requestOptions)
		.then(handleResponse)
		.then(res => {
			return res;
		})
}