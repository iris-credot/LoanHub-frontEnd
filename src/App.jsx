// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Admin from './Pages/AdminDash/Admin'
import Manager from './Pages/ManagerDash/Manager'
import Teacher from './Pages/TeacherDash/Teacher'
import AuthRoute from './Pages/AuthRoute'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Forgot from './Components/Forgot'
import Login from './Components/Login'
import Reset from './Components/Reset'
import Call from './Components/Call'
import About from './Components/About'
import Main from './Components/Main'

import About from './Components/About'
import Home from './Components/Home'


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Call/>}>
          <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
          </Routes>
        </Router>
 

export default App