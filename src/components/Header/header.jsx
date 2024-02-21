import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import balanceContext from "../Contexts/balanceContext";



const Header = () => {
    let navigate = useNavigate();
    const val = useContext(balanceContext);
    const HandleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    let token = localStorage.getItem('token');

    async function fetchData() {
        const response = await fetch("http://localhost:5000/api/getname/getusername", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: token })
        })

        const data = await response.json();
        localStorage.setItem('id', data._id);

    }

    useEffect(() => {
        fetchData()
    });
    return (

        <>
            <div className="headerContainer">
                <Link style={{ fontSize: '40px', fontWeight: '900', color: 'white', textDecoration: 'none' }} to="/">FreeStock</Link>
                <div className="headerTextContainer">
                    <Link className="headerText" to="/">Home</Link>
                    <Link className="headerText" to="/About">About</Link>
                    <Link className="headerText" to="/Services">Services</Link>
                    <Link className="headerText" to="/Contact">Contact Us</Link>
                </div>

                {!localStorage.getItem('token') ? (<div className="loginSignupButtonContainer">
                    <Link className="btn btn-light" to="/Login" role="button" style={{ display: 'flex', alignItems: 'center' }}>Login</Link>
                    <Link className="btn btn-light" to="/SignUp" role="button" style={{ display: 'flex', alignItems: 'center' }}>Sign up</Link>
                </div>) :
                    (<div className="logoutContainer">
                        <Link style={{ fontSize: '18px', fontWeight: '774', color: 'white', textDecoration: 'none', marginRight: '10px' }} to="/Profile">{val.name}</Link>
                        <button className="btn btn-light" onClick={HandleLogout} style={{ height: '35px' }}>logout</button>
                    </div>)}

            </div>
        </>

    );
}

export default Header;