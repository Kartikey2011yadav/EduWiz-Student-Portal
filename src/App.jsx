import React from 'react';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserProfile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
