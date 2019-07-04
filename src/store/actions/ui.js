export const openDrawer=() => (dispatch) => dispatch({ type: 'OPEN_DRAWER_MENU' });

export const closeDrawer=() => (dispatch) => dispatch({ type: 'CLOSE_DRAWER_MENU' });

export const toggleDrawer=() => (dispatch) => dispatch({ type: 'TOGGLE_DRAWER_MENU' });

export const toggleOrderLabelBanner=() => (dispatch) => dispatch({ type: 'TOGGLE_ORDER_LABEL_BANNER'})

export const toggleOrderLabelDrawer=() => (dispatch) => dispatch({ type: 'TOGGLE_ORDER_LABEL_DRAWER'})

export const openOrderLabelBanner=()=> (dispatch) => dispatch({ type: 'OPEN_ORDER_LABEL_BANNER' })

export const closeOrderLabelBanner=()=> (dispatch) => dispatch({ type: 'CLOSE_ORDER_LABEL_BANNER' })

export const closeOrderLabel=()=> (dispatch) => dispatch({ type: 'CLOSE_ORDER_LABEL'})