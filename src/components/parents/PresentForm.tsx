import {ReactElement, useState} from "react";
import {ITodoNote, ITodoNoteContext} from "../../interfaces.ts";
import {AddTodo, DeleteNoteByName} from "../../data.ts";
import {Outlet} from "react-router-dom";

export function PresentForm() : ReactElement {



    const [todoNotes, setTodoNotes] = useState<ITodoNote[]>([]);
    const onSubmit = (data: ITodoNote) => {
        const todoNote: ITodoNote = {
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

    function onDelete(name: string) {
        const newNotes = DeleteNoteByName(todoNotes, name)
        setTodoNotes(newNotes);
    }
    const todoNoteContext: ITodoNoteContext = {
        todoNotes,
        onToggleCompleted,
        onDelete,
        onSubmit,

    }


    return (
        <>
            <Outlet context = {todoNoteContext} />
        </>
    );
}
