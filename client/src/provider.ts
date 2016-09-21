import * as React from 'react';
import { Store } from 'redux';

export function createProvider<P,S>() {
    interface ProviderProps<P> {
        store: Store<S>,
        target: React.ComponentClass<P>
    }

    class Provider extends React.Component<ProviderProps<P>, any> {
        static childContextTypes = {
            store: React.PropTypes.object.isRequired
        }

        getChildContext() {
            return { store: this.props.store };
        }

        render() {
            return React.createElement(this.props.target);
        }
    };

    return Provider;
}
