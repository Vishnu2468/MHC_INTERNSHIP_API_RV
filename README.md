# React + Vite API Fetch Application

## Overview

This repository contains a basic React + Vite application that fetches and displays data from APIs. It includes a simple navigation system with a navbar and pages for Home, About, Contact, and various tasks that demonstrate different API interactions.

## Features

- **React + Vite setup** for fast development and performance optimization.
- **Navigation** using React Router.
- **API Fetching** from `jsonplaceholder.typicode.com`.
- **Modular Components** for structured development.
- **Dynamic User List, Todos, and Dropdown Selection** for interactive data display.

## Pages

### 1. Home Page

Displays a landing page with a basic UI.
![image](https://github.com/user-attachments/assets/b9c591de-3e79-426b-8769-0140894e7eeb)

### 2. About Page

Provides details about the project and its functionalities.
![image](https://github.com/user-attachments/assets/11177c7f-0ff7-4f01-aad4-8ee1e4fcc8e4)

### 3. Contact Page

Basic contact information and details.
![image](https://github.com/user-attachments/assets/cc046307-30c6-4db2-90b0-5bdfefa8fe2b)

### 4. User List Page

Fetches and displays a list of users from an API.
![image](https://github.com/user-attachments/assets/3959bcee-2717-4753-a839-c8cf7605de1b)

### 5. Task Pages

Each task page showcases different API interactions:

- **Task 1:** Fetches a list of users and displays their details.
  ![image](https://github.com/user-attachments/assets/6dd501dc-0da3-4033-b6b9-cee511adce9e)
  
- **Task 2:** Fetches user details such as name, email, and address.
  ![image](https://github.com/user-attachments/assets/c4c222fd-b109-4e3f-b8ed-b1449e9100b3)
  
- **Task 3:** Fetches a to-do list with completion status.
  ![image](https://github.com/user-attachments/assets/6facca81-965b-4883-8675-17b20c8ce707)
  
- **Task 4:** Implements a dropdown to select a user and display their details in a table.
  ![image](https://github.com/user-attachments/assets/72eee512-2540-49b8-93be-8c4ea87ff1f4)

## How to Set Up the Project

### 1. Install Node.js (if not installed)

Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

### 2. Create a New React + Vite Project

```sh
npm create vite@latest my-app --template react
```

Navigate into the project directory:

```sh
cd my-app
```

Install dependencies:

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

This will start the Vite development server.

## API Fetching Snippet

The following is a generic fetch snippet used across the application:

```js
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching data:', error));
}, []);
```

## Important Code Snippets

### Fetch and Display Users (Task 1)

```js
function Task1User() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h1>User List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {users.map(user => (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '16px', width: '300px' }}>
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Address:</strong> {user.address.street}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
```

### Fetch and Display Todos (Task 3)

```js
function Task2Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h1>Todo List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {todos.map(todo => (
                    <div key={todo.id} style={{ border: '1px solid #ccc', padding: '16px', width: '300px' }}>
                        <p><strong>Title:</strong> {todo.title}</p>
                        <p><strong>Completed:</strong> {todo.completed ? 'True' : 'False'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
```

### User Selection Dropdown (Task 4)

```js
function Task3Drop() {
    const [users, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    const handleChange = (event) => {
        const user = users.find(user => user.name === event.target.value);
        setSelectedUser(user);
    };
    return (
        <div>
            <h1>User Dropdown</h1>
            <select onChange={handleChange}>
                <option value="">-- Select a User --</option>
                {users.map(user => <option key={user.id} value={user.name}>{user.name}</option>)}
            </select>
            {selectedUser && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedUser.id}</td>
                            <td>{selectedUser.name}</td>
                            <td>{selectedUser.email}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}
```

## Technologies Used

- **React** for UI development
- **Vite** for a fast development server
- **Fetch API** for API calls
- **React Router** for navigation

## Conclusion

This project provides a basic demonstration of API fetching and rendering in React + Vite. You can extend it further by adding more features like authentication, form handling, and state management.

Feel free to contribute and improve the project!

give me in professional way and include the images which i have given



