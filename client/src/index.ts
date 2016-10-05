import { createElement } from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';
import Root from './components/Root';

render(
    createElement(Root, {store: configureStore()}),
    document.getElementById('root')
);
