export type TodosState = TodoItemState[];

export interface TodoItemState {
    id: number,
    text: string,
    completed: boolean
}

export const initialTodosState: TodosState = [{
    id: 0,
    text: 'Use Redux',
    completed: false
}];
