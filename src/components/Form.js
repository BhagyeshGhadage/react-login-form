import React from 'react'
import Registration from './Registration'
import LogIn from './LogIn'
import './Form.css';

const Form = () => {
    const getData = localStorage.getItem('userData');
    return (
        <div className="form-container">
            {!getData ? (<Registration />) : (<LogIn />)}
        </div>
    )
}

export default Form
