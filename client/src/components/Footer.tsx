import * as React from 'react';

import FilterLink from './FilterLink';


export default () =>
    <p>
        Show:
        {' '}
        <FilterLink filter="active">Active</FilterLink>
        {', '}
        <FilterLink filter="completed">Completed</FilterLink>
        {', '}
        <FilterLink filter="all">All</FilterLink>
    </p>
