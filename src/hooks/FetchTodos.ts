export async function fetchTodos() {
    const response = await fetch('http://localhost:5047/api/Todo');
    return await response.json();
}
