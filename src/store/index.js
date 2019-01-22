import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import reducer from './reducers';

import firebase, { firestore } from '../config/firebase';

// let hasDevToolsExtension=() => typeof devToolsExtension==='function'? window.devToolsExtension():undefined;

export default createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), reduxFirestore(firestore), reactReduxFirebase(firebase)));