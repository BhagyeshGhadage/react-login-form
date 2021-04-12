import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import validation from './Validation'
import { MdAccountBox } from "react-icons/md";
import { BsFillEnvelopeFill, BsLockFill, BsPersonFill } from "react-icons/bs"

const Registration = ({ }) => {
    const history = useHistory();
    const getData = localStorage.getItem('userData');
    const getObj = JSON.parse(getData);
    const [UserData, setUserData] = useState({ username: "", email: "", password: "" })
    const [errors, setErrors] = useState({})
    const [isSubmitted, setisSubmitted] = useState(false)

    const handleInput = (e) => {
        setUserData({ ...UserData, [e.target.name]: e.target.value })
        setErrors(validation(UserData))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setErrors(validation(UserData))
        if (Object.keys(errors).length === 0) {
            setisSubmitted(true)
            history.push("/");
            localStorage.setItem('userData', JSON.stringify(UserData))
        }
    }

    return (
        <div className="register-wrapper">
            <h1>Registration</h1>
            <form>
                <div className="icon"><MdAccountBox /></div>
                <div className="item-data">
                    <label htmlFor="username">User name</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsPersonFill /></span>
                        </div>
                        <input type="text" autoComplete="off" className="input-field"
                            name="username"
                            id="username"
                            value={UserData.username}
                            onChange={handleInput}
                        />
                    </div>
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="item-data">
                    <label htmlFor="email">Email</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsFillEnvelopeFill /></span>
                        </div>
                        <input type="text" autoComplete="off" className="input-field"
                            name="email"
                            id="email"
                            value={UserData.email}
                            onChange={handleInput}
                        />
                    </div>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="item-data">
                    <label htmlFor="password">Password</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsLockFill /></span>
                        </div>
                        <input type="password" autoComplete="off" className="input-field"
                            name="password"
                            id="password"
                            value={UserData.password}
                            onChange={handleInput}
                        />
                    </div>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
            </form>
            <button className="btn" onClick={handleRegister} disabled={isSubmitted}>Registration</button>
        </div>
    )
}

export default Registration
