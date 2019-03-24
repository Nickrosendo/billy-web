
const INITIAL_STATE={
	drawerOpen: false,
	orderLabelBannerOpen: false
};

export default (state=INITIAL_STATE, action) => {
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
		case 'TOGGLE_ORDER_LABEL_BANNER':
			const orderLabelBannerOpen=state.orderLabelBannerOpen? (false):(true);
			return {
				...state,
				orderLabelBannerOpen
			}
		case 'OPEN_ORDER_LABEL_BANNER':
			return {
				...state,
				orderLabelBannerOpen: true
			}
		default:
			return state;
	}
};