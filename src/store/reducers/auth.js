
const INITIAL_STATE = {
	isAuth: false,
	authError: null,
	name: 'Nicolas'
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			console.log('login success');
			return {
				...state,
				isAuth: true,
				authError: null
			};
		case 'LOGIN_ERROR':
			return {
				...state,
				authError: 'Login Error'
			};
		default:
			return state;
	}
};