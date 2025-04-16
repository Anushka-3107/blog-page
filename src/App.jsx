import React from 'react'
import LoginPage from './components/loginPage'
import SignupPage from './components/SignupPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<SignupPage />} />
      <Route path='/login' element= {<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App