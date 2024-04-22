import { useState } from 'react'

import { MainCard } from './components/MainCard'

import placeholder_person from './assets/images/chao.png'

import './App.css'

function App() {
const [backgroundColor, setBackgroundColor] = useState<string>('bg-gradient-to-t from-orange-300');
const [bottomBarColor, setBottomBarColor] = useState<string>('bg-orange-100');

  return (
    <>
      <div className="flex justify-center h-screen w-screen bg-slate-300">
        <MainCard name='chao' fav_song='walking on sunshine' profile_pic={placeholder_person} background_color={backgroundColor} bottom_bar_color={bottomBarColor}/>
      </div>
    </>
  )
}

export default App
