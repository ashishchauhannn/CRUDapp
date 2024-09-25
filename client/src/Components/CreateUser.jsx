import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BASE_URL } from '../main';
import './CSS/CreateUser.css';
const CreateUser = () => {

    // hooks 
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    //Navigations for pages...
    const navigate = useNavigate()
    // handling
    const Submit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/createUser`, { name, age, email })
            .then(result => {
                console.log(result)
                toast.success("user created successfully!")
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
