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

    const clickedId = notes.findIndex(note => note.id === chosenId);
    if(clickedId > -1)
    {
        const updatedNotes = [...notes];
        const tempValue = updatedNotes[neighbourId];
        updatedNotes[neighbourId] = updatedNotes[clickedId];
        updatedNotes[clickedId] = tempValue;
    }

    return notes;
}

export const generateUniqueId = (() => {
    let id = 1;
    return () => ++id;
})();