import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../main';
import './CSS/UpdateUsers.css';
const UpdateUsers = () => {


    const { id } = useParams()
    // hooks 
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    //Navigations for pages...
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BASE_URL}/getUser/` + id)
            .then(result => {
                console.log(result)
                setFname(result.data.fname)
                setLname(result.data.lname)
                setPhone(result.data.phone)
                setEmail(result.data.email)
                setAddress(result.data.address)
            })
            .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}/updateUser/` + id, { fname, lname, phone, email, address })
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
                    <label htmlFor="name">FullName:</label>
                    <input type="text" id="name" name="name" required
                        value={fname} onChange={(e) => setFname(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="age">LastName:</label>
                    <input type="text" id="age" name="age" required
                        value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Phone:</label>
                    <input type="text" id="email" name="email" required
                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>    <div className="form-group">
                    <label htmlFor="email">Address:</label>
                    <input type="text" id="email" name="email" required
                        value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit" className="submit-btn">Update</button>
            </form>
        </div>
    )
}

export default UpdateUsers
