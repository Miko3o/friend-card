import { useState } from 'react'

import { MainCard } from './components/MainCard'

import './App.css'

function App() {

  return (
    <>
      <div className="flex justify-center h-screen w-screen bg-slate-300">
        <MainCard />
      </div>
    </>
  )
}

export default App
