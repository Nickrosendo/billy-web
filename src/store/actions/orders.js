// export const testThunk = (test) => {
// 	return (dispatch, getState, { getFirebase, getFirestore }) => {
// 		const firestore = getFirestore();
// 		firestore.collection('users').where('name', '==', 'Admin').get().then((res) => {
// 			res.forEach(doc => {
// 				// doc.data() is never undefined for query doc snapshots
// 				console.log(doc.id, ' => ', doc.data());
// 			});
// 		});
// 		setTimeout(() => {
// 			console.log('inside timeout');
// 			return dispatch({
// 				type: 'TEST_THUNK',
// 				test
// 			});
// 		}, 5000);
// 	};
// };

export function setOrderHistory(history) {
	return {
		type: 'SET_HISTORY',
		history
	};
}


export function setCurrentOrder(currentOrder) {
	return {
		type: 'SET_CURRENT_ORDER',
		currentOrder
	};
}

export function updateCurrentOrder(currentOrder) {
	return {
		type: 'UPDATE_CURRENT_ORDER',
		currentOrder
	};
}

export function setPreviousRoute(previousRoute) {
	return {
		type: 'SET_PREVIOUS_ROUTE',
		previousRoute
	};
}

export function removeOrderItem(item) {
	return {
		type: 'REMOVE_ORDER_ITEM',
		item
	};
}
