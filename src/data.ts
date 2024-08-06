import {ITodoNote} from "./interfaces.ts";

export function AddTodo(collection: ITodoNote[], todoNote: ITodoNote): ITodoNote[] {
    return [...collection, todoNote]
}

export function DeleteNoteByName(todoNotes: ITodoNote[], index: string): ITodoNote[] {
    return todoNotes.filter(todoNotes => todoNotes.name !== index);
}

export function UpdateSpecificTodoNote(notes: ITodoNote[], name: string):ITodoNote[] {
    const index = notes.findIndex(note => note.name === name);
    if (index > -1) {
        return [...notes.slice(0, index), ...notes.slice(index + 1)];
    }
    return notes;
}