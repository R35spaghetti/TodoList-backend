import {ITodoNote} from "../interfaces.ts";
import {ReactElement} from "react";

interface ITodoProps {
    todoNote: ITodoNote;
}

export function TodoNote({todoNote}: ITodoProps): ReactElement {
    return (
        <article className="todoNote">
            <label>date</label>
            <p>{todoNote.date.toDateString()}</p>
            <label>author</label>
            <p>{todoNote.author}</p>
            <label>name</label>
            <p>{todoNote.name}</p>
            <label>description</label>
            <p>{todoNote.description}</p>
            <label>completed</label>
            <p>{todoNote.completed}</p>
        </article>
    );
}
