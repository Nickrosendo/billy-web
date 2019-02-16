import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import reducer from './reducers';

import firebase, { firestore } from '../config/firebase';

let ssrCompose = compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })));
if (typeof window !== 'undefined') {
	ssrCompose = compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firestore), reactReduxFirebase(firebase));
	if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
		ssrCompose = compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firestore), reactReduxFirebase(firebase), window.__REDUX_DEVTOOLS_EXTENSION__());
	}
}

export default createStore(reducer, ssrCompose);