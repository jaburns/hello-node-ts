import * as React from 'react';
import { connect, MapDispatchToPropsObject } from 'react-redux';

import { TodosState } from './state';
import * as actions from './actions';

interface StateProps {
    todos: TodosState;
}

interface DispatchProps {
    addTodo(text: string): any
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: TodosState): StateProps => ({
    todos: state
});

const mapDispatchToProps: MapDispatchToPropsObject = {
    addTodo: actions.addTodo
};

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<Props, any> {
    render() {
        let vals = this.props.todos.map(todo => <li>{todo.text}</li>);

        return (<div>
            <h1>Todo App</h1>
            <button onClick={() => { this.props.addTodo("new TODO"); }}>
                Add
            </button>
            {vals}
        </div>);
    }
}
