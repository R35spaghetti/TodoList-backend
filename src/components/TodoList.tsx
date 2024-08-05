import {ITodoNoteList} from "../interfaces.ts";
import {ReactElement} from "react";
import {TodoNote} from "./TodoNote.tsx";

interface ITodoListProps
{
    todoList: ITodoNoteList
}

export function TodoList({todoList}:ITodoListProps): ReactElement {
    return (
        <section className="todo-list">
            {todoList.collection.map((item) => (
                <TodoNote key={item.id} todoNote={item}/>
            ))}
        </section>
    )
}