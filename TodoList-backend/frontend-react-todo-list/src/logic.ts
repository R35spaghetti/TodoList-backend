import {ITodoNote} from "./interfaces.ts";
import {CreateTodo, DeleteById, UpdateTodo} from "./hooks/FetchTodos.ts"
export function AddTodo(collection: ITodoNote[], todoNote: ITodoNote): ITodoNote[] {
    CreateTodo(todoNote).then(r => r);
    return [...collection, todoNote]
}

export function DeleteNoteById(todoNotes: ITodoNote[], index: number): ITodoNote[] {
    DeleteById(index).then(r => r);
    return todoNotes.filter(todoNotes => todoNotes.id !== index);
}

export function UpdateSpecificTodoNote(notes: ITodoNote[], noteToUpdate: ITodoNote): ITodoNote[] {
    const index = notes.findIndex(note => note.id === noteToUpdate.id);
    if (index > -1) {
        const updatedNotes = [...notes];
        updatedNotes[index] = noteToUpdate;
        UpdateTodo(updatedNotes[index]).then(r => r);
        return updatedNotes;
    }
    return notes;
}

export function UpdateNeighbours(notes: ITodoNote[], chosenIndex: number, neighbour: number): ITodoNote[] {

    if (chosenIndex >= 0 && chosenIndex < notes.length && neighbour >= 0 && neighbour < notes.length) {
        const updatedNotes = [...notes];
        const tempValue = updatedNotes[chosenIndex];
        updatedNotes[chosenIndex] = updatedNotes[neighbour];
        updatedNotes[neighbour] = tempValue;
        return updatedNotes;

    }
    return notes;

}

export function SortTodos(notes: ITodoNote[], criterion: "date" | "author"): ITodoNote[] {
    if (criterion == "date") {
        return [...notes].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    return [...notes].sort((a, b) => a.author.localeCompare(b.author));

}

export const generateUniqueId = (() => {
    let id = 1;
    return () => ++id;
})();