import { TodosState } from './state';

export const loadState = (): TodosState | undefined => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState) as TodosState;
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (state: TodosState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
    }
};
