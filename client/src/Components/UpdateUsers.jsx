import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../main';
import './CSS/UpdateUsers.css';
const UpdateUsers = () => {


    const { id } = useParams()
    // hooks 
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    //Navigations for pages...
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BASE_URL}/getUser/` + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setAge(result.data.age)
                setEmail(result.data.email)
            })
            .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}/updateUser/` + id, { name, age, email })
            .then(result => {
                console.log(result)
                toast.success("user has been updated")
                navigate('/')
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="form-container">
            <h2>UPDATE USER</h2>
            <form onSubmit={Update} >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required
                        value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required
                        value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    )
}

export default UpdateUsers
