import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";
import { BsLockFill, BsPersonFill } from "react-icons/bs"

const LogIn = () => {
    const getData = localStorage.getItem('userData');
    const getObj = JSON.parse(getData);
    const [UserData, setUserData] = useState({ logName: "", logPassword: "" })
    const [errors, setErrors] = useState(false)
    const history = useHistory();

    const handleInput = (e) => {
        setUserData({ ...UserData, [e.target.name]: e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if (getObj.username === UserData.logName && getObj.password === UserData.logPassword) {
            history.push("/welcome");
        } else {
            setErrors(true)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="item-data">
                    <div className="icon"><MdAccountBox /></div>
                    <label htmlFor="logName">User name</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsPersonFill /></span>
                        </div>
                        <input type="text" autoComplete="off" className="input-field"
                            name="logName"
                            id="logName"
                            value={UserData.logName}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="item-data">
                    <label htmlFor="logPassword">Password</label>
                    <div className="item-input">
                        <div className="item-icon">
                            <span className="input-icon"><BsLockFill /></span>
                        </div>
                        <input type="password" autoComplete="off" className="input-field"
                            name="logPassword"
                            id="logPassword"
                            value={UserData.logPassword}
                            onChange={handleInput}
                        />
                    </div>
                    {errors && <p className="error">User name or Password is incorrect.</p>}
                </div>
                <button className="btn" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default LogIn
