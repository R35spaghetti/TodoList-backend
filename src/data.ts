import {ITodoNote} from "./interfaces.ts";

export function AddTodo(collection: ITodoNote[], todoNote: ITodoNote): ITodoNote[] {
    return [...collection, todoNote]
}

export function DeleteNoteById(todoNotes: ITodoNote[], index: number): ITodoNote[] {
    return todoNotes.filter(todoNotes => todoNotes.id !== index);
}
export function UpdateSpecificTodoNote(notes: ITodoNote[], noteToUpdate: ITodoNote): ITodoNote[] {
    const index = notes.findIndex(note => note.id === noteToUpdate.id);
    if (index > -1) {
        const updatedNotes = [...notes];
        updatedNotes[index] = noteToUpdate;
        return updatedNotes;
    }
    return notes;
}
export function UpdateNeighbours(notes: ITodoNote[], chosenId: number, neighbourId: number): ITodoNote[] {

    const chosenIndex = notes.findIndex(note => note.id === chosenId);
    const neighbourIndex = notes.findIndex(note => note.id === neighbourId);
    if(chosenIndex !== -1 && neighbourIndex !== -1)
    {
        const tempValue = notes[chosenIndex];
        notes[chosenIndex] = notes[neighbourIndex];
        notes[neighbourIndex] = tempValue;
        return notes;
    }

    return notes;
}

export const generateUniqueId = (() => {
    let id = 1;
    return () => ++id;
})();