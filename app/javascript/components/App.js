import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Greeting from './Greeting'
import Header from './Header';


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </Router>
)

export default App