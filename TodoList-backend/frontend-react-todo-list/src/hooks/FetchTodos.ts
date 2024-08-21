export async function fetchTodos() {
    const response = await fetch('http://localhost:5047/api/Todo');
    return await response.json();
}

export async function DeleteById(id: number)
{
    const url = `http://localhost:5047/api/Todo/${id}`;
    const response = await fetch(url, { method: 'DELETE' });
    return response.json();
    
}