import { Store, createStore } from 'redux';
import * as throttle from 'lodash/throttle';

import reducer from './reducers';
import { saveState, loadState } from './storage';

export default () => {
    const store = createStore(reducer, loadState());

    store.subscribe(throttle(() => {
        const state = store.getState();
        if (typeof state !== 'undefined') {
            saveState(state);
        }
    }, 1000));

    return store;
};
