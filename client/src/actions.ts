
export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };


export interface AddTodoAction {
    type: 'ADD_TODO';
    text: string;
}

export type AddTodoFunc = (text: string) => AddTodoAction;
export const addTodo: AddTodoFunc = text => ({
    type: 'ADD_TODO',
    text
});


export interface DeleteTodoAction {
    type: 'DELETE_TODO';
    id: number;
}

export type DeleteTodoFunc = (id: number) => DeleteTodoAction;
export const deleteTodo: DeleteTodoFunc = id => ({
    type: 'DELETE_TODO',
    id
});


export interface CompleteTodoAction {
    type: 'COMPLETE_TODO';
    id: number;
}

export type CompleteTodoFunc = (id: number) => CompleteTodoAction;
export const completeTodo: CompleteTodoFunc = id => ({
    type: 'COMPLETE_TODO',
    id
});


