export function setUser(user) {
	return {
		type: 'SET_USER',
		user
	};
}

export const signIn=credentials => (dispatch, getState, { getFirebase }) => {
	const firebase=getFirebase();
	
	return firebase.auth().signInWithEmailAndPassword(
		credentials.email,
		credentials.password
	).then(() => {
		dispatch({ type: 'LOGIN_SUCCESS' });
	})  
		.catch(error => {
			dispatch({ type: 'LOGIN_ERROR', error });
			return setTimeout(() => dispatch({ type: 'CLEAR_AUTH_ERRORS' }), 5000);
		});
};

export const signUp=newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firebase=getFirebase();
	const firestore=getFirestore();

	firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
		.then(res => firestore.collection('users').doc(res.user.uid).set({ firstName: newUser.firstName, lastName: newUser.lastName }))
		.then(() => dispatch({ type: 'SIGNUP_SUCCESS' }))
		.catch( error => {
			dispatch({ type: 'SIGNUP_ERROR', error });
			return setTimeout(() => dispatch({ type: 'CLEAR_AUTH_ERRORS' }), 5000);
		});
};

export const signOut=() => (dispatch, getState, { getFirebase }) => {
	const firebase=getFirebase();
	firebase.auth().signOut().then(() => dispatch({ type: 'LOGOUT_SUCCESS' }))
		.catch(err => {
			console.error('Erro ao deslogar usuario: ', err);
		});
};