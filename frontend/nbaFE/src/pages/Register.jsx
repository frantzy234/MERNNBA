import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;

        try {
            const response = await axios.post('/register', {
                name, email, password
            });
            const responseData = response.data; 
            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                setData({ name: '', email: '', password: '' }); 
                toast.success('Registration Successful!');
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred during registration.');
        }
    };

    return (
        <div className="loginContainer"> 
            <h2>Register</h2>
            <form onSubmit={registerUser} className="loginForm"> 
                <label>Name</label>
                <input
                    type='text'
                    placeholder='Enter name...'
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    required
                />
                <label>Email</label>
                <input
                    type='email'
                    placeholder='Enter email...'
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                />
                <label>Password</label>
                <input
                    type='password'
                    placeholder='Enter password...'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    required
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;
