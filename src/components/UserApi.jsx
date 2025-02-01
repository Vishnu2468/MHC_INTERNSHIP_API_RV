import React,{useState,useEffect, useDebugValue} from "react";
function UserList(){
    const [users,setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/').then((response) => response.json()).then((data) => setUser(data)).catch((error) => console.error('Error fetching data:',error));
    }
    ,[]);
    console.log(users) //it display the entire users data from API in console
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {
                    users.map((user) => (
                        <li>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UserList