
const INITIAL_STATE = {
	drawerOpen: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'OPEN_DRAWER_MENU':
			return {
				...state,
				drawerOpen: true
			};
		case 'CLOSE_DRAWER_MENU':
			return {
				...state,
				drawerOpen: false
			};
		default:
			return state;
	}
};