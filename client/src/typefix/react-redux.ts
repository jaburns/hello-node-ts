import * as React from 'react';
import { Router, withRouter as rawWithRouter } from 'react-router';

export interface RouterProps {
    params: Router.Params
}

export const withRouter:
    <P>(component: React.ComponentClass<P & RouterProps>)
        => React.ComponentClass<P>
    = rawWithRouter;
