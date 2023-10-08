import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HappyPage from './hp';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/happyPage" element={<HappyPage />} />
          {/* <Route path="/page" component={Page} /> */}
        </Routes>
    </Router>
    
  );
}

export default App;
