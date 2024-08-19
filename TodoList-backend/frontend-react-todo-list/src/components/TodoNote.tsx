import {ITodoNote} from "../interfaces.ts";
import {ReactElement} from "react";
import "./TodoNote.css";

interface ITodoProps {
    todoNote: ITodoNote;
}

export function TodoNote({todoNote}: ITodoProps): ReactElement {
    return (
        <article className="todoNote">
            <label>date</label>
            <p>{todoNote.date.toString()}</p>
            <label>author</label>
            <p>{todoNote.author}</p>
            <label>name</label>
            <p>{todoNote.name}</p>
            <label>description</label>
            <p>{todoNote.description}</p>
        </article>
    );
}
