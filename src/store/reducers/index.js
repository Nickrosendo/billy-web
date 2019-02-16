import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import auth from './auth';
import ui from './ui';
import orders from './orders';
import restaurants from './restaurants';

const root = combineReducers({
	auth,
	ui,
	orders,
	restaurants,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default root;

