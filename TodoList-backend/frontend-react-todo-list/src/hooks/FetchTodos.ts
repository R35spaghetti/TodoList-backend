import {ITodoNote} from "../interfaces.ts";

export async function fetchTodos() {
    const response = await fetch('http://localhost:5047/api/Todo');
    return await response.json();
}

export async function DeleteById(id: number) {
    const url = `http://localhost:5047/api/Todo/${id}`;
    const response = await fetch(url, {method: 'DELETE'});
    return response.json();

}

export async function UpdateTodo(todoItem: ITodoNote) {
    const url = `http://localhost:5047/api/Todo/${todoItem.id}`;
    const options = { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoItem)
    };
    const response = await fetch(url, options);
    return response.json();
}

export async function CreateTodo(todoItem: ITodoNote) {
    const url = `http://localhost:5047/api/Todo/`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoItem)
    };
    
    const response = await fetch(url, options);
    return response.json();
}