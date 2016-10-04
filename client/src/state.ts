export type TodosState = TodoItemState[];

export interface TodoItemState {
    id: number,
    text: string,
    completed: boolean
}
