import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../main';
import './CSS/Users.css';
const Users = () => {
    //use state..
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`${BASE_URL}/deleteUser/` + id)
            .then(result => {
                console.log(result)
                toast.error("user deleted successfully!")
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
                        <th>FullName</th>
                        <th>LastName</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // use state call here..

                        users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
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
