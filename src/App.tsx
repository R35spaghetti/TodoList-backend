import {TodoList} from "./components/TodoList.tsx";
import {ITodoNote} from "./interfaces.ts";

export function App() {

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
            <TodoList todoList={notes}/>
        </>
    );
}
