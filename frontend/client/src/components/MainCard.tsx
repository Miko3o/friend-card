import'./components.css'

import { Dashboard } from './Dashboard'
import { Login } from '../services/spotify/Login'



type MainCardProps = {
    code: string | null
    name: string
    fav_song: string
    profile_pic: string
    background_color: string
    bottom_bar_color: string


}

export const MainCard = (props: MainCardProps) => {

    
    return (
        <div className="m-28 w-[800px] h-[450px] bg-white flex justify-center items-center shadow-2xl"> {/*wrapper*/}
            <div className={`w-[790px] h-[440px] ${props.background_color} to bg-transparent flex justify-end items-end`}> {/*background*/}
                <div className='flex justify-end mr-16'>
                    <img src={props.profile_pic} alt="person" width="270" style={{ transform: 'scaleX(-1)' }}/>
                </div>
                <div className={`flex absolute w-[790px] h-[100px] rounded-t-[50%] rounded-tl-[40%] rounded-tr-[40%] bg-gradient-to-t from-white to ${props.bottom_bar_color} opacity-90"`}> {/*bottom white bar*/}
                    <h1 className='text-5xl my-7 mx-32'>
                       {props.name} 
                    </h1>
                    <h2 className='text-4xl my-7'>
                        {!props.code ? <Login/> : <Dashboard code={props.code}/>}
                    </h2>
                    
                </div>
                
            </div>
        </div>
    )


} 