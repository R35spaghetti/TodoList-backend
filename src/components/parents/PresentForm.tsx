import {ReactElement, useState} from "react";
import {ITodoNote, ITodoNoteContext} from "../../interfaces.ts";
import {AddTodo, DeleteNoteById, SortTodos, UpdateNeighbours, UpdateSpecificTodoNote} from "../../data.ts";
import {Outlet} from "react-router-dom";
import {Header} from "../Header.tsx";

export function PresentForm(): ReactElement {


    const [todoNotes, setTodoNotes] = useState<ITodoNote[]>([]);

    const onSubmit = (data: ITodoNote) => {
        const todoNote: ITodoNote = {
            id: data.id,
            date: data.date,
            author: data.author,
            name: data.name,
            description: data.description,
            completed: data.completed,
        };

        const updatedTodoList = AddTodo(todoNotes, todoNote);
        setTodoNotes(updatedTodoList);
    };
    const onToggleCompleted = (name: string) => {
        setTodoNotes(todoNotes.map(item =>
            item.name === name ? {...item, completed: !item.completed} : item))
    }

    function onDelete(id: number) {
        const newNotes = DeleteNoteById(todoNotes, id)
        setTodoNotes(newNotes);
    }

    function onUpdate(note: ITodoNote) {
        const updatedNote = UpdateSpecificTodoNote(todoNotes, note);
        setTodoNotes(updatedNote);
    }

    function onUpdateNeighbours(chosenIndex: number, neighbourId: number) {
        const updatedNotes = UpdateNeighbours(todoNotes, chosenIndex, neighbourId);
        setTodoNotes(updatedNotes);
    }

    function sortTodos(criterion: "date" | "author") {
        const sortedNotes = SortTodos(todoNotes, criterion);
        setTodoNotes(sortedNotes);
    }

    const todoNoteContext: ITodoNoteContext = {
        todoNotes,
        onToggleCompleted,
        onDelete,
        onSubmit,
        onUpdate,
        onUpdateNeighbours,
        sortTodos,
    }


    return (
        <>
            <Header/>
            <Outlet context={todoNoteContext}/>
        </>
    );
}
