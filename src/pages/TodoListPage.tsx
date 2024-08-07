import {ReactElement} from "react";
import {TodoNote} from "../components/TodoNote.tsx";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";
import {Link} from "react-router-dom";


export function TodoListPage(): ReactElement {
    const {todoNotes, onDelete, onToggleCompleted} = useTodoNoteContext();

    return (
        <section className="todo-list">
            {todoNotes.map((item,index) => (
                <div key={item.name}>
                    <TodoNote todoNote={item} />
                    <button onClick={() => onDelete(item.id)}>Delete</button>
                    <input type="checkbox" id="completed" checked={item.completed} onChange={() => onToggleCompleted(item.name)} onClick={() => onToggleCompleted(item.name)}/>COMPLETED
                    <Link to={`/edit/${index}`}>EDIT</Link>
                </div>
            ))}
        </section>
    )
}