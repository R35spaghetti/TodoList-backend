import {ITodoNote} from "../../interfaces.ts";
import {useState} from "react";
import {AddTodo} from "../../data.ts";
import {TodoList} from "../TodoList.tsx";
import {AddTodoNote} from "../AddTodoNote.tsx";

export function PresentForm() {

    const [todoNoteCollection, setTodoNoteCollection] = useState<ITodoNote[]>([]);
    const handleSubmit = (data: ITodoNote) => {
        const todoNote: ITodoNote = {
            date: data.date,
            author: data.author,
            name: data.name,
            description: data.description,
            completed: data.completed,
        };

        const updatedTodoList = AddTodo(todoNoteCollection, todoNote);
        setTodoNoteCollection(updatedTodoList);
    };
    return (
        <>
            <AddTodoNote onSubmit={handleSubmit}/>
            <TodoList todoList={todoNoteCollection}/>
        </>
    );
}
