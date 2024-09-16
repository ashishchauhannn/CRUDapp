import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/CreateUser.css'
const CreateUser = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", { name, age, email })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))

    }
    return (
        <div className="form-container">
            <h2>CREATE USER</h2>
            <form onSubmit={Submit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required
                        onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser
