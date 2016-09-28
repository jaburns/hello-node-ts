import * as React from 'react';
import { connect, MapDispatchToPropsObject } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TodosState } from './state';
import * as actions from './actions';

interface StateProps {
    todos: TodosState;
}

interface DispatchProps {
    addTodo(text: string): any;
    completeTodo(id: number): any;
    deleteTodo(id: number): any;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: TodosState): StateProps => ({
    todos: state
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(actions as any, dispatch);

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<Props, any> {
    render() {
        let vals = this.props.todos.map(todo => <div>
            <button onClick={() => this.props.deleteTodo(todo.id)}> X </button>
            <li onClick={() => this.props.completeTodo(todo.id)}>
                {todo.text + (todo.completed ? ' X': '')}
            </li>
        </div>);

        return (<div>
            <h1>Todo App</h1>
            <button onClick={() => { this.props.addTodo("new TODO"); }}>
                Add
            </button>
            {vals}
        </div>);
    }
}
