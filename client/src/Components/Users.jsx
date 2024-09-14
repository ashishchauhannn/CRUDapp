import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Users.css'

const Users = () => {
    //use state..
    const [users, setUsers] = useState([{
        Name: "Aashish",
        Email: "ashish@gmail.com",
        Age: 24

    }])

    return (
        <div className="table-form-container">
            <h2>ALL USERS</h2>
            <table className="form-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // use state call here..

                        users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.Name}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.Email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to='/create' >  <button type="button" className="add-btn">Add</button></Link>
            <Link to='/create' >  <button type="button" className="del-btn">Delete</button></Link>
            <Link to='/update'> <button type="submit" className="submit-btn">Update</button></Link>
        </div>
    );
}

export default Users
