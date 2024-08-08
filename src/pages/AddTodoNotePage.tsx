import {ITodoNote} from "../interfaces.ts";
import {FormEventHandler, ReactElement, useState} from "react";
import {Input} from "../components/Input.tsx";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";
import {useNavigate} from "react-router-dom";
import {generateUniqueId} from "../data.ts";
import "./TodoNote-Form.css";

export function AddTodoNotePage(): ReactElement {

    const {onSubmit} = useTodoNoteContext();
    const navigate = useNavigate();
    const [todoNote, setTodoNote] = useState<ITodoNote>(
        {
            id: generateUniqueId(),
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
        navigate("/");

    }
    return (
        <>
            <form className="todo-note-form" onSubmit={handleOnSubmit}>
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
                <button type="submit">Submit</button>
            </form>
        </>
    );
}