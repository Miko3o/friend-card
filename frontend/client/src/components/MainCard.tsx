import'./components.css'

import placeholder_person from '../assets/images/chao.png'


type MainCardProps = {

}

export const MainCard = () => {

    
    return (
        <div className="m-28 w-[800px] h-[450px] bg-white flex justify-center items-center shadow-2xl"> {/*wrapper*/}
            <div className="w-[790px] h-[440px] bg-gradient-to-t from-orange-300 to bg-transparent flex justify-end items-end"> {/*orange background*/}
                <div className='flex justify-end mr-16'>
                    <img src={placeholder_person} alt="chao" width="270" style={{ transform: 'scaleX(-1)' }}/>
                </div>
                <div className="absolute w-[790px] h-[100px] rounded-t-[50%] rounded-tl-[40%] rounded-tr-[40%] bg-gradient-to-t from-white to bg-orange-100"   > {/*bottom white bar*/}
                    
                </div>
                
            </div>
        </div>
    )


} 