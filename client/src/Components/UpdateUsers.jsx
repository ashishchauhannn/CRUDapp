import React from 'react'
import './CSS/UpdateUsers.css'
const UpdateUsers = () => {
    return (
        <div className="form-container">
            <h2>UPDATE USER</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    )
}

export default UpdateUsers
