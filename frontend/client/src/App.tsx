import { useState, useEffect } from 'react'
import axios from 'axios';

import { Login } from './services/spotify/Login'
import { MainCard } from './components/MainCard'
import { Dashboard } from './components/Dashboard';

import placeholder_person from './assets/images/chao.png'

import './App.css'

const clientID = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const code: string | null = new URLSearchParams(window.location.search).get('code')


function App() {
  

  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    //API Access Token for Spotify
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + clientID + '&client_secret=' + clientSecret
    }

    fetch('https:/accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

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
