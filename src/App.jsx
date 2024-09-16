import React from 'react';
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UserProfile from './UserProfile/UserProfile';
import StudyMaterial from './StudyMaterial/StudyMaterial';
import TestAnalytics from './TestAnalytics/TestAnalytics';
import PracticePapers from './PracticePapers/PracticePapers';
import VideoContent from './VideoContent/VideoContent';
import Articles from './Articles/Articles';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserProfile/>}/>
          <Route path="/studymaterial" element={<StudyMaterial/>}/>
          <Route path='/testAnalytics' element={<TestAnalytics />}/>
          <Route path="/practicePapers" element={<PracticePapers />} />
          <Route path='/videoContent' element={<VideoContent />}/>
          <Route path='/articles' element={<Articles />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
