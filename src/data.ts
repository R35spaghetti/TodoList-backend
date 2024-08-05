import {ITodoNote} from "./interfaces.ts";

export function AddTodo(collection: ITodoNote[], todoNote: ITodoNote): ITodoNote[] {
    return [...collection, todoNote]
}

export function DeleteNoteByName(todoNotes: ITodoNote[], index: string): ITodoNote[] {
    return todoNotes.filter(todoNotes => todoNotes.name !== index);
}