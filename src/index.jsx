import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './style/index.css';
import './style/icons.css';

import Loading from './components/Loading';

import * as serviceWorker from './serviceWorker';

const LazyApp=lazy(() => import('./App'));

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Suspense fallback={<Loading />}>
                <LazyApp />
            </Suspense>
        </Provider>
        , document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
})
