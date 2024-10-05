import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BASE_URL } from '../main';
import './CSS/CreateUser.css';
const CreateUser = () => {

    // hooks 
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    //Navigations for pages...
    const navigate = useNavigate()
    // handling
    const Submit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/createUser`, { fname, lname, phone, email, address })
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
                    <label htmlFor="name">FirstName:</label>
                    <input type="text" id="name" name="name" required
                        onChange={(e) => setFname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">LastName:</label>
                    <input type="text" id="age" name="age" required
                        onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Phone:</label>
                    <input type="text" id="email" name="email" required
                        onChange={(e) => setPhone(e.target.value)} />
                </div>  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>  <div className="form-group">
                    <label htmlFor="email">Address:</label>
                    <input type="text" id="email" name="email" required
                        onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser
