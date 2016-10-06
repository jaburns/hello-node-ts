import * as React from 'react';


interface TodoProps {
    onClick: () => void;
    completed: boolean;
    text: string;
}

export default (props: TodoProps) =>
    <li
        onClick={props.onClick}
        style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
            {props.text}
    </li>;
