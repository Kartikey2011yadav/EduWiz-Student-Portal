import React from 'react';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
import StudyMaterial from './StudyMaterial/StudyMaterial';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserProfile/>}/>
          <Route path="/studymaterial" element={<StudyMaterial/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
