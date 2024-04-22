import React, { useEffect, useState } from 'react';
import './JoinedEvents.css';

function JoinedEvents() {
    const [teams, setTeams] = useState([]);
    const [name, setName] = useState(localStorage.getItem('GameAppPersonName'));
    const [ ID, setID] = useState(localStorage.getItem('GameAppPersonID'));
    const [UserJoinedteams, setUserJoinedteams] = useState([]);


    const createGame = () => {
        if(!isLoggedIn()) {
            window.location.href = '/login';
        }
        else{
            window.location.href = '/create-event';
        }
    }

    useEffect(() => {
        if(!isLoggedIn()) {
            window.location.href = '/login';
        }
    });

    useEffect(() => {
        fetch(`http://localhost:3500/getTeamsByUser?user_id=${localStorage.getItem('GameAppPersonID')}`)
            .then(response => response.json())
            .then(data => setUserJoinedteams(data.teams))
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3500/teams')
            .then(response => response.json())
            .then(data => setTeams(data))
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []);

    function goToHome() {
        window.location.href = '/homepage';
    }

    function isLoggedIn() {
        if(localStorage.getItem('GameAppPersonID') != null) {
            return true;
        }
        else {
            return false;
        }
    }

    function joinGame(GameID) {
        console.log(GameID);
        if(!isLoggedIn()) {
            window.location.href = '/login';
        }
        else{
            fetch('http://localhost:3500/players', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, "team_id": GameID, "user_id": parseInt(ID)}),
            }).then(window.location.href = '/join-event');
        }
        return undefined;
    }

    function leaveGame(GameID) {
        console.log(GameID);
        if (!isLoggedIn()) {
            window.location.href = '/login';
        }
        else {
            fetch(`http://localhost:3500/leave-game`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"team_id": GameID, "user_id": parseInt(ID)}),
            })
                .then(response => {
                    if (response.ok) {
                        window.location.href = '/joined-events';
                    } else {
                        throw new Error('Failed to leave game');
                    }
                })
                .catch(error => console.error(error));
        }
    }



    return (
        <div>
            <button className='home-button' onClick={goToHome}><h1 className='title'>Event Management System</h1></button>

            <div className="teams-container">
                {teams
                    .filter(team => UserJoinedteams != null && UserJoinedteams.includes(team.id))
                    .map(team => (
                        <div className="team-card" key={team.id}>
                            <h2>{team.name}</h2>
                            {/*<p>{team.id}</p>*/}
                            <p>{team.gameTime}</p>
                            <p>{team.gameDate}</p>
                            <p>{team.gamePeriod}</p>
                            <button style={{ color: 'black', backgroundColor: 'darkgrey' }} onClick={() => leaveGame(team.id)}>Leave</button>
                        </div>
                    ))
                }
                <div className="team-card">
                    <h3>Create New Event</h3>
                    <button onClick={createGame}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default JoinedEvents;