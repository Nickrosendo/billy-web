export function setUser(user) {
	return {
	type: "SET_USER",
	user
	};
}

export const fetchProfile = () => (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {  
	const firebase = getFirebase();
	const firestore = getFirestore();

	const uid = firebase.auth().getUid();
	
	if (uid) {
		firestore
			.collection("users")
			.doc(uid)
			.get()
			.then(doc => {
				const profile = doc.data();
				dispatch({ type: "SET_PROFILE", profile });
			});
	}
};

export const signIn = credentials => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firebase = getFirebase();	

	return firebase
	.auth()
	.signInWithEmailAndPassword(credentials.email, credentials.password)
	.then(({user}) => {
		const firestore = getFirestore();
		const uid = user.uid;
		
		if (uid) {
			firestore
			.collection("users")
			.doc(uid)
			.get()
			.then(doc => {
				const profile = doc.data();
				dispatch({ type: "SET_PROFILE", profile });
			});
		}
		dispatch({ type: "LOGIN_SUCCESS" });
	})
	.catch(error => {
		dispatch({ type: "LOGIN_ERROR", error });
		return setTimeout(() => dispatch({ type: "CLEAR_AUTH_ERRORS" }), 5000);
	});
};

export const signUp = newUser => (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firebase = getFirebase();
	const firestore = getFirestore();

	firebase
	.auth()
	.createUserWithEmailAndPassword(newUser.email, newUser.password)
	.then(res => {

    const profile = {
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			email: newUser.email
		};

    firestore
		.collection("users")
		.doc(res.user.uid)
		.set(profile)

    dispatch({ type: 'SET_PROFILE', profile });
    dispatch({ type: 'SIGNUP_SUCCESS' });
  }
	)	
	.catch(error => {
		dispatch({ type: "SIGNUP_ERROR", error });
		return setTimeout(() => dispatch({ type: "CLEAR_AUTH_ERRORS" }), 5000);
	});
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
	const firebase = getFirebase();
	firebase
	.auth()
	.signOut()
	.then(() => dispatch({ type: "LOGOUT_SUCCESS" }))
	.catch(err => {
		console.error("Erro ao deslogar usuario: ", err);
	});
};
