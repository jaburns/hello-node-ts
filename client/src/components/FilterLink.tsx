import * as React from 'react';
import { Link } from 'react-router';

import { Visibility } from '../state';


export default (props: {filter: Visibility, children?: React.ReactNode}) =>
    <Link
        to={props.filter === 'all' ? '' : props.filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}>
            {props.children}
    </Link>;
