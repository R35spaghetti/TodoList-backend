import {TodoList} from "./components/TodoList.tsx";
import {ITodoNote} from "./interfaces.ts";
import {AddTodoNote} from "./components/AddTodoNote.tsx";
import {useState} from "react";
import {AddTodo} from "./data.ts";

export function App() {

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
    const notes: ITodoNote[] = [
        {
            date: new Date('2024-08-05'),
            author: 'John Doe',
            name: 'Learn TypeScript',
            description: 'Master the basics of TypeScript.',
            completed: false,
        },
        {
            date: new Date('2024-08-06'),
            author: 'Jane Smith',
            name: 'Finish Project X',
            description: 'Complete the final stages of Project X.',
            completed: true,
        },
    ];
    return (
        <>
            <AddTodoNote onSubmit={handleSubmit}/>
            <TodoList todoList={notes}/>
        </>
    );
}
