import { useState, useEffect } from 'react'
import { MainCard } from '../components/MainCard'
import { GLogin } from '../components/GoogleLoginButton';

import placeholder_person from '../assets/images/chao.png'

const code: string | null = new URLSearchParams(window.location.search).get('code')

export const ProfilePage = () => {

    const [backgroundColor, setBackgroundColor] = useState<string>('bg-gradient-to-t from-orange-300');
    const [bottomBarColor, setBottomBarColor] = useState<string>('bg-orange-100');

    return (
        <div className="">
            <GLogin/>
            <MainCard code={code} name='chao' fav_song='walking on sunshine' profile_pic={placeholder_person} background_color={backgroundColor} bottom_bar_color={bottomBarColor}/>
        </div>
    )
}