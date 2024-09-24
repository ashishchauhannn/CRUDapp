import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Users.css';

const Users = () => {
    //use state..
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/' + id)
            .then(result => {
                console.log(result)
                window.location.reload()

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="table-form-container">
            <h2>ALL USERS</h2>
            <table className="form-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // use state call here..

                        users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td> <Link to={`/update/${user._id}`}> <button className="submit-btn">Update</button></Link>
                                        <button className="del-btn" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to='/create' > <button type="button" className="add-btn">AddUser</button></Link>


        </div>
    );
}

export default Users
