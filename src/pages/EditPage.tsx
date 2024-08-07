import React, {FormEventHandler, ReactElement, useState} from "react";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";
import {ITodoNote} from "../interfaces.ts";
import {Input} from "../components/Input.tsx";
import {useNavigate, useParams} from "react-router-dom";

export function EditPage() : ReactElement
{
    const { id } = useParams();
    const {todoNotes, onUpdate} =  useTodoNoteContext();
    const noteToUpdate = todoNotes[parseInt(id!)];
    const navigate = useNavigate();


    const [updateTodoNote, setUpdateTodoNote] = useState<ITodoNote>(
        {
            id: noteToUpdate.id,
            date: noteToUpdate.date,
            author: noteToUpdate.author,
            name: noteToUpdate.name,
            description: noteToUpdate.description,
            completed: noteToUpdate.completed,
        }
    )
    const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onUpdate(updateTodoNote);
        navigate("/");

    }
    return (
        <form className="edit-toDoNote" onSubmit={handleOnSubmit}>
            <Input label="date"
                   onChange={(e) => setUpdateTodoNote(prevState => ({...prevState, date: new Date(e.target.value)}))}
                   type="date" value={updateTodoNote.date}/>
            <Input label="author"
                   onChange={(e) => setUpdateTodoNote(prevState => ({...prevState, author: e.target.value}))} type="text"
                   value={updateTodoNote.author}/>
            <Input label="name"
                   onChange={(e) => setUpdateTodoNote(prevState => ({...prevState, name: e.target.value}))}
                   type="text" value={updateTodoNote.name}/>
            <Input label="description"
                   onChange={(e) => setUpdateTodoNote(prevState => ({...prevState, description: e.target.value}))}
                   type="textarea" value={updateTodoNote.description}/>
            <Input label="completed"
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpdateTodoNote(prevState => ({
                       ...prevState,
                       completed: e.target.checked
                   }))}
                   type="checkbox" value={updateTodoNote.completed}/>
            <button type="submit">Submit</button>
        </form>
    );
}