import { useState } from 'react'

import { MainCard } from './components/MainCard'

import placeholder_person from './assets/images/chao.png'

import './App.css'

function App() {

  return (
    <>
      <div className="flex justify-center h-screen w-screen bg-slate-300">
        <MainCard name='chao' fav_song='walking on sunshine' profile_pic={placeholder_person}/>
      </div>
    </>
  )
}

export default App
