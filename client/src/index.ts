import * as React from 'react';
import { render } from 'react-dom';

import createProvider from './utils/provider';
import configureStore from './configureStore';
import Root from './Root';

const Provider = createProvider();
const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('app')
);
