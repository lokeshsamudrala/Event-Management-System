import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Account from './Account';
import reportWebVitals from './reportWebVitals';
import MyDashboard from "./MyDashboard";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Homepage from "./Landing";
import CreateEvent from "./CreateEvent";
import ViewAllEvents from "./ViewAllEvents";
import EventDetails from "./EventDetails";
import JoinedEvents from "./JoinedEvents";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>

          <Routes>
              <Route path="/" element={<Account />} />
              <Route path="/dashboard" element={<MyDashboard />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/create-event" element={<CreateEvent />} />
                <Route path="/join-event" element={<ViewAllEvents />} />
                <Route path="/eventDetails" element={<EventDetails />} />
                <Route path="/joined-events" element={<JoinedEvents />} />

          </Routes>


        </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
