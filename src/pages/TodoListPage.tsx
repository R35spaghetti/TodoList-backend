import {ReactElement} from "react";
import {TodoNote} from "../components/TodoNote.tsx";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";
import {Link} from "react-router-dom";
import {SortsNotes} from "../components/SortsNotes.tsx";
import "./TodoListPage.css";

export function TodoListPage(): ReactElement {
    const {todoNotes, onDelete, onToggleCompleted, onUpdateNeighbours} = useTodoNoteContext();

    return (
        <section>
            <SortsNotes/>
            <section className="todo-list-container">
                {todoNotes.map((item, index) => (
                    <section className="todNote-container" key={item.id}>
                        <TodoNote todoNote={item}/>
                        <section className="button-options">
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                            <input type="checkbox" id="completed" checked={item.completed}
                                   onChange={() => onToggleCompleted(item.id)}/>COMPLETED
                            <Link to={`/edit/${index}`}>EDIT</Link>
                            <button onClick={() => onUpdateNeighbours(index, index - 1)}>UPP ARROW</button>
                            <button onClick={() => onUpdateNeighbours(index, index + 1)}>DOWN ARROW</button>
                        </section>
                    </section>
                ))}
            </section>
        </section>

    )
}