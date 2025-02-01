import React, { useState, useEffect } from "react";

function Task3drop() {
    const [users, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);  // State to store selected user details

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Handle change in dropdown selection
    const handleChange = (event) => {
        const selectedUserName = event.target.value;
        const user = users.find((user) => user.name === selectedUserName);
        setSelectedUser(user);  // Set selected user's details
    };

    return (
        <div>
            <h1>Drop Down</h1>
            <div style={styles.container}>
                <h4 style={styles.label}>Select Name :</h4>
                <select name="drop" onChange={handleChange}>
                    <option value="">-- Select a User --</option>
                    {
                        users.map((user) => (
                            <option key={user.id} value={user.name}>
                                {user.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            {/* Display table with headers even when no user is selected */}
            <div style={styles.tableContainer}>
                <h2>{selectedUser ? `Details of ${selectedUser.name}` : 'Select a User to View Details'}</h2>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Username</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Only show selected user details if a user is selected */}
                        {selectedUser ? (
                            <tr>
                                <td style={styles.td}>{selectedUser.id}</td>
                                <td style={styles.td}>{selectedUser.name}</td>
                                <td style={styles.td}>{selectedUser.username}</td>
                                <td style={styles.td}>{selectedUser.email}</td>
                                <td style={styles.td}>{selectedUser.phone}</td>
                            </tr>
                        ) : (
                            <tr>
                                <td colSpan="5" style={styles.td}>Please select a user from the dropdown.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',           // Use flexbox to align elements horizontally
        alignItems: 'center',      // Vertically align items to the center
        gap: '10px',               // Space between the label and dropdown
    },
    label: {
        margin: '0',               // Remove any margin from label to prevent spacing issues
    },
    tableContainer: {
        marginTop: '20px',         // Add space between the dropdown and table
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',  // Ensures borders between cells collapse into a single border
        marginTop: '10px',
    },
    th: {
        padding: '12px 15px',       // Adds padding to header cells
        textAlign: 'left',          // Align text to the left
        backgroundColor: '#fff4', // Light gray background for headers
        borderBottom: '2px solid #ddd',  // Bottom border for header
    },
    td: {
        padding: '12px 15px',       // Adds padding to table data cells
        textAlign: 'left',          // Align text to the left
        borderBottom: '1px solid #ddd', // Border at the bottom of data cells
    },
}

export default Task3drop;
