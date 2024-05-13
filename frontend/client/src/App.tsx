import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import { Navbar } from './Navbar';

import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';





//client ID's and Secrets
const googleClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const googleClientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

//code
//code
const code: string | null = new URLSearchParams(window.location.search).get('code')




function App() {
  


  const [backgroundColor, setBackgroundColor] = useState<string>('bg-gradient-to-t from-orange-300');
  const [bottomBarColor, setBottomBarColor] = useState<string>('bg-orange-100');



  return (
    <>
      <div className="h-screen w-screen bg-slate-300">
        <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
