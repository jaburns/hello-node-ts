import { createElement } from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';
import Root from './Root';

const store = configureStore();

render(
    createElement(Root, {store: store}),
    document.getElementById('app')
);
