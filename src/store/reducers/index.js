import { combineReducers } from 'redux';

import auth from './auth';
import order from './order';
import restaurant from './restaurant';

const root = combineReducers({
	auth,
	order,
	restaurant
});

export default root;

