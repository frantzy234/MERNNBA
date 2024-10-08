import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        try {
            const response = await axios.post('/login', { email, password });
            const responseData = response.data; 
            console.log("Login response:", responseData); 

           
            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                setData({
                    email: '',
                    password: ''
                });
                toast.success('Login Successful. Welcome!');
                console.log("Navigating to home page..."); 
                navigate('/');
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("An error occurred during login.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={loginUser} className="login-form">
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
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
