import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import App from "./Account";

function Homepage() {

    function isLoggedIn() {
        if(localStorage.getItem('GameAppPersonID') != null) {
            return true;
        }
        else {
            return false;
        }
    }


    function goToCreateGame() {
        if(!isLoggedIn()) {
            window.location.href = '/login';
        }
        else{
            window.location.href = '/create-event';

        }
    }
    function goToJoinGame() {
        window.location.href = '/join-event';

    }
    function goToMyDashboard() {

        if(!isLoggedIn()) {
            window.location.href = '/login';
        }
        else{
            window.location.href = '/dashboard';
        }
    }

    function goToJoinedGames() {

            if(!isLoggedIn()) {
                window.location.href = '/login';
            }
            else{
                window.location.href = '/joined-events';
            }
    }


    function logout() {
        localStorage.removeItem('GameAppPersonEMail');
        localStorage.removeItem('GameAppPersonID');
        localStorage.removeItem('GameAppPersonName');
        window.location.href = '/';
    }

    function goToLogin() {
        window.location.href = '/login';
    }

    return (
        <div>
        <div className='header'>

            <h1 className='title'>Event Management System</h1>
            {/* <p>Plan and join group sports games with ease.</p> */}
                {isLoggedIn() &&
            <div className='navBars'>
                    <div className='user-buttons'>
                        <button onClick={goToCreateGame}>Create a Event</button>
                        <button onClick={goToJoinGame}>Join a Event</button>
                        <button onClick={goToMyDashboard}>View My Dashboard</button>
                        <button onClick={goToJoinedGames}>Joined Events</button>
                        <button className ="logout" onClick={logout}>Logout</button>
                    </div>
            </div>
                }

            <div>
                {!isLoggedIn() &&
                    <div className='form'>
                        <button onClick={goToLogin}>Login</button>
                    </div>
                }
            </div>
        </div>
        <br></br>
        <p>Welcome, {localStorage.getItem('GameAppPersonName')}</p>
        </div>
        
    );
}

export default Homepage;