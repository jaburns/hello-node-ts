import * as React from 'react';
import { connect } from 'react-redux';
import { TodosState, Visibility } from '../state';
import { setVisibilityFilter, SetVisibilityFilterFunc } from '../actions';


interface FilterLinkConf {
    filter: Visibility
}

interface FilterLinkProps {
    active: boolean;
    children?: React.ReactNode;

    setVisibilityFilter: SetVisibilityFilterFunc;
}

const mapState = (state: TodosState, ownProps: FilterLinkConf) => ({
    active: state.visibilityFilter === ownProps.filter
});

const mapDispatch = {
    setVisibilityFilter
};

export default connect(mapState, mapDispatch)((props: FilterLinkProps & FilterLinkConf) => {
    if (props.active) {
        return <span>{props.children}</span>
    }
    return <a
        href="#"
        onClick={e => {
            e.preventDefault();
            props.setVisibilityFilter(props.filter);
        }}>
            {props.children}
    </a>
});
