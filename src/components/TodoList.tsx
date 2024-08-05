import {ITodoNote} from "../interfaces.ts";
import {ReactElement} from "react";
import {TodoNote} from "./TodoNote.tsx";

interface ITodoListProps
{
    todoList: ITodoNote[];
}

export function TodoList({todoList}:ITodoListProps): ReactElement {
    return (
        <section className="todo-list">
            {todoList.map((item) => (
                <TodoNote key={item.name} todoNote={item}/>
            ))}
        </section>
    )
}