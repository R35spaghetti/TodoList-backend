import {ITodoNote} from "../interfaces.ts";
import {ReactElement} from "react";

interface ITodoProps {
    todoNote: ITodoNote;
}

export function TodoNote({todoNote}: ITodoProps): ReactElement {
    return (
        <article className="todoNote">
            <p>{todoNote.date.toDateString()}</p>
            <p>{todoNote.author}</p>
            <p>{todoNote.name}</p>
            <p>{todoNote.description}</p>
            <p>{todoNote.completed}</p>

        </article>
    );
}
