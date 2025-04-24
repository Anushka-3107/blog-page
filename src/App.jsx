import React from 'react'
import LoginPage from './components/loginPage'
import SignupPage from './components/SignupPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavigationBar from './components/NavigationBar'

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signUp' element= {<SignupPage />} />
      <Route path='/login' element= {<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App