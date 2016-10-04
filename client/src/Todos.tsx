import * as React from 'react';
import { connect, MapDispatchToPropsObject } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { TodosState } from './state';
import {
    addTodo, AddTodoFunc,
    completeTodo, CompleteTodoFunc,
    deleteTodo, DeleteTodoFunc
} from './actions';

interface StateProps {
    todos: TodosState;
}

interface DispatchProps {
    addTodo: AddTodoFunc;
    completeTodo: CompleteTodoFunc;
    deleteTodo: DeleteTodoFunc;
}

const mapStateToProps = (state: TodosState) => ({
    todos: state
});

const mapDispatchToProps = {
    addTodo,
    completeTodo,
    deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)((props: StateProps & DispatchProps) => {
    const vals = props.todos.map(todo => <div>
        <button onClick={() => props.deleteTodo(todo.id)}> X </button>
        <li onClick={() => props.completeTodo(todo.id)}>
            {todo.text + (todo.completed ? ' X': '')}
        </li>
    </div>);

    return <div>
        <h1>Todo App</h1>
        <Link to="/">Back to hello</Link>
        <button onClick={() => { props.addTodo('new TODO'); }}>
            Add
        </button>
        {vals}
    </div>;
});
