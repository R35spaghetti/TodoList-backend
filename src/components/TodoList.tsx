import {ReactElement} from "react";
import {TodoNote} from "./TodoNote.tsx";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";


export function TodoList(): ReactElement {
    const {todoNotes, onDelete, onToggleCompleted} = useTodoNoteContext();

    return (
        <section className="todo-list">
            {todoNotes.map((item) => (
                <div key={item.name}>
                    <TodoNote todoNote={item} />
                    <button onClick={() => onDelete(item.name)}>Delete</button>
                    <input type="checkbox" id="completed" checked={item.completed} onClick={() => onToggleCompleted(item.name)}/>COMPLETED
                </div>
            ))}
        </section>
    )
}