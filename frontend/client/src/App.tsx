import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script';
import axios from 'axios';


import { MainCard } from './components/MainCard'



import placeholder_person from './assets/images/chao.png'

import './App.css'



//client ID's and Secrets
const googleClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const googleClientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

//code
const code: string | null = new URLSearchParams(window.location.search).get('code')

/*  useEffect(() => {
  /* global google
  
  google.accounts.id.initialize()


}, []) */


function App() {
  


  const [backgroundColor, setBackgroundColor] = useState<string>('bg-gradient-to-t from-orange-300');
  const [bottomBarColor, setBottomBarColor] = useState<string>('bg-orange-100');



  return (
    <>
      <div className="flex justify-center h-screen w-screen bg-slate-300">
        <MainCard code={code} name='chao' fav_song='walking on sunshine' profile_pic={placeholder_person} background_color={backgroundColor} bottom_bar_color={bottomBarColor}/>
      </div>
    </>
  )
}

export default App
