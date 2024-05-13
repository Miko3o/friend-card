import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'


import { MainCard } from './components/MainCard'
import { Navbar } from './Navbar';

import './App.css'
import { LoginPage } from './pages/LoginPage';

import placeholder_person from './assets/images/chao.png'





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
          <Route path="/profile" element={<MainCard code={code} name='chao' fav_song='walking on sunshine' profile_pic={placeholder_person} background_color={backgroundColor} bottom_bar_color={bottomBarColor}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
