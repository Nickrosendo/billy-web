import { combineReducers } from 'redux';

import auth from './auth';
import order from './order';

const root = combineReducers({
	auth,
	order
});

export default root;

