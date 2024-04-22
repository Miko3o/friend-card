import { useState, useEffect } from 'react'
import axios from 'axios';

import { MainCard } from './components/MainCard'

import placeholder_person from './assets/images/chao.png'

import './App.css'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

function App() {
  console.log(CLIENT_ID, 'hi')
  /*useEffect(() => {
    //API Access Token for Spotify
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https:/accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => console.log(data))
  }, [])*/

  const [backgroundColor, setBackgroundColor] = useState<string>('bg-gradient-to-t from-orange-300');
  const [bottomBarColor, setBottomBarColor] = useState<string>('bg-orange-100');


  const getQuote = () => { //testing api
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)

    })
  }

  return (
    <>
      <div className="flex justify-center h-screen w-screen bg-slate-300">
        <MainCard name='chao' fav_song='walking on sunshine' profile_pic={placeholder_person} background_color={backgroundColor} bottom_bar_color={bottomBarColor}/>

        <button onClick={getQuote}>Get Quote</button>
      </div>
    </>
  )
}

export default App
