import React, { useState,useEffect } from 'react'
import LoginPage from './components/loginPage'
import SignupPage from './components/SignupPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavigationBar from './components/NavigationBar'


const App = () => {

  const [darkMode,setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    const root = window.document.documentElement;
    if(darkMode){
      root.classList.add('dark');
    }
    else{
      root.classList.remove('dark');
    }
  },[darkMode]);
  

  return (
    <div className='min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300'>
    <BrowserRouter>
    <NavigationBar toggleDarkMode = {toggleDarkMode} isDarkMode={darkMode} />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signUp' element= {<SignupPage />} />
      <Route path='/login' element= {<LoginPage />} />
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App