import {ITodoNote} from "../interfaces.ts";
import {ReactElement} from "react";
import {TodoNote} from "./TodoNote.tsx";

interface ITodoListProps
{
    todoList: ITodoNote[];
    onDelete: (data: string) => void;
    onToggleCompleted: ToggleCompleted;
}
type ToggleCompleted = (name: string) => void;

export function TodoList({todoList, onDelete, onToggleCompleted}:ITodoListProps): ReactElement {
    return (
        <section className="todo-list">
            {todoList.map((item) => (
                <div key={item.name}>
                    <TodoNote todoNote={item} />
                    <button onClick={() => onDelete(item.name)}>Delete</button>
                    <input type="checkbox" id="completed" checked={item.completed} onClick={() => onToggleCompleted(item.name)}/>COMPLETED
                </div>
            ))}
        </section>
    )
}