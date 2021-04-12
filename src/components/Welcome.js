import { useHistory } from 'react-router-dom'
import { IoPowerSharp } from "react-icons/io5";
import './Welcome.css';

const Welcome = () => {
    const history = useHistory();
    const getData = localStorage.getItem('userData');
    const getObj = JSON.parse(getData);
    
    const handleLogout = (e) => {
        localStorage.clear()
        history.push("/");
    }

    return (
        <div className="welcome-wrapper">
            <div className="item-container">
                <div className="item-data">
                    <h2>Welcome {!getData ? 'Test user' : getObj.username} </h2>
                    <h2>Thank you signing up Ampra Solutions.</h2>
                    <p className="text">We are passionate professionals with more than 15 years of individual experience in innovative software design and development across multiple industries segments - retail, life sciences, automobile, banking, insurance & financial services to name a few.</p>
                    <p className="text">We provide consulting and software development services in Supply chain, Customer relationship management, Data and Analytics.</p>
                    <p className="text">We specialise in package implementation, custom application development, mobile application development, cloud migration, cloud application development and test automation services.</p>
                    <button className="btn" onClick={handleLogout}>
                        <span className="input-icon"><IoPowerSharp /></span>
                        <span className="input-title">Logout</span></button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
