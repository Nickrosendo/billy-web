export const openDrawer=() => (dispatch, getState) => dispatch({ type: 'OPEN_DRAWER_MENU' });

export const closeDrawer=() => (dispatch, getState) => dispatch({ type: 'CLOSE_DRAWER_MENU' });