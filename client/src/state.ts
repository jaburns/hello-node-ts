
export type Visibility = 'all' | 'completed' | 'active';

export const stringToVisibility = (input: string): Visibility => {
    switch(input) {
        case 'completed': return 'completed';
        case 'active': return 'active';
        default: return 'all';
    }
}

export interface TodosState {
    todos: TodoItemState[];
}

export interface TodoItemState {
    id: string,
    text: string,
    completed: boolean
}
