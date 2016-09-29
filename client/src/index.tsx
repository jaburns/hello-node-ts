import * as React from 'react';
import { render } from 'react-dom';
import { Store, createStore } from 'redux';

import { createProvider } from './utils/provider';
import { reducer } from './reducers';
import { App } from './App';

const store = createStore(reducer);
const Provider = createProvider();

render(
    <Provider store={store} target={App} />,
    document.getElementById('app')
);
