import {ReactElement, useState} from "react";
import {ITodoNote, ITodoNoteContext} from "../../interfaces.ts";
import {AddTodo, DeleteNoteByName, UpdateSpecificTodoNote} from "../../data.ts";
import {Outlet} from "react-router-dom";
import {Header} from "../Header.tsx";

export function PresentForm() : ReactElement {



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
    const onToggleCompleted = (id: number) => {
        setTodoNotes(todoNotes.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item))
    }

    function onDelete(id: number) {
        const newNotes = DeleteNoteByName(todoNotes, id)
        setTodoNotes(newNotes);
    }

    function onUpdate(note: ITodoNote) {
        const updatedNote = UpdateSpecificTodoNote(todoNotes, note);
        setTodoNotes(updatedNote);
    }


    const todoNoteContext: ITodoNoteContext = {
        todoNotes,
        onToggleCompleted,
        onDelete,
        onSubmit,
        onUpdate,
    }


    return (
        <>
            <Header/>
            <Outlet context = {todoNoteContext} />
        </>
    );
}
