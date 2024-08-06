import {ITodoNote} from "../interfaces.ts";
import React, {FormEventHandler, ReactElement, useState} from "react";
import {Input} from "./Input.tsx";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";

export function AddTodoNote(): ReactElement {

    const {onSubmit} = useTodoNoteContext();
    const [todoNote, setTodoNote] = useState<ITodoNote>(
        {
            date: new Date(),
            author: "",
            name: "",
            description: "",
            completed: false,
        }
    )

    const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit(todoNote);

    }
    return (
        <>
            <form className="add-toDoNote" onSubmit={handleOnSubmit}>
                <Input label="date"
                       onChange={(e) => setTodoNote(prevState => ({...prevState, date: new Date(e.target.value)}))}
                       type="date" value={todoNote.date}/>
                <Input label="author"
                       onChange={(e) => setTodoNote(prevState => ({...prevState, author: e.target.value}))} type="text"
                       value={todoNote.author}/>
                <Input label="name"
                       onChange={(e) => setTodoNote(prevState => ({...prevState, name: e.target.value}))}
                       type="text" value={todoNote.name}/>
                <Input label="description"
                       onChange={(e) => setTodoNote(prevState => ({...prevState, description: e.target.value}))}
                       type="textarea" value={todoNote.description}/>
                <Input label="completed"
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoNote(prevState => ({
                           ...prevState,
                           completed: e.target.checked
                       }))}
                       type="checkbox" value={todoNote.completed}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}