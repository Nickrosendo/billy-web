import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize firebase
const config={
	apiKey: 'AIzaSyA7YYCcLmm9Jo-u3nx_kBYWJFJHjX_hjwU',
	authDomain: 'billy-web.firebaseapp.com',
	databaseURL: 'https://billy-web.firebaseio.com',
	projectId: 'billy-web',
	storageBucket: 'billy-web.appspot.com',
	messagingSenderId: '932748275273'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;

export const firestore = firebase.firestore();