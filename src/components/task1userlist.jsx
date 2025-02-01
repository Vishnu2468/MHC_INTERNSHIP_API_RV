import React, { useState, useEffect } from "react";

function Task1User() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        // Fetch user data from the API
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched data:', data); // Debugging to verify data
                setUser(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {users.map((user) => (
                        <div
                            key={user.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '16px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                width: '291px',
                                textAlign: 'center',
                            }}
                        >
                            <h3>{user.name}</h3>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Address:</strong> {user.address.street}</p>
                        </div>
                    ))}

            </div>
        </div>
    );
}

export default Task1User;
