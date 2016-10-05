import * as React from 'react';
import { connect } from 'react-redux';

import { TodosState } from '../state';
import { addTodo, AddTodoFunc } from '../actions';


interface AddTodoProps {
    addTodo: AddTodoFunc
}

const mapState = (state: TodosState) => ({});

const mapDispatch = {
    addTodo
};

export default connect(mapState, mapDispatch)((props: AddTodoProps) => {
    let inputElem: HTMLInputElement;

    return <div>
        <input ref={x => { inputElem = x; }} />
        <button
            onClick={() => {
                props.addTodo(inputElem.value);
                inputElem.value = '';
            }}>
                Add Todo
        </button>
    </div>;
});
