import React, { useState, useEffect } from "react";

function Task2todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch todo data from the API
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data); // Debugging to verify data
                setTodos(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            width: '46.8%', // Set the width to 50% minus the gap
                            textAlign: 'center',
                        }}
                    >
                        <h3>User ID: {todo.userId}</h3>
                        <p><strong>ID:</strong> {todo.id}</p>
                        <p><strong>Title:</strong> {todo.title}</p>
                        <p><strong>Completed:</strong> {todo.completed ? 'true' : 'false'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Task2todos;
