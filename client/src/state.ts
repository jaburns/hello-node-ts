
export type Visibility =
    'SHOW_ALL'
  | 'SHOW_COMPLETED'
  | 'SHOW_ACTIVE';

export interface TodosState {
    todos: TodoItemState[];
    visibilityFilter: Visibility;
}

export interface TodoItemState {
    id: string,
    text: string,
    completed: boolean
}
