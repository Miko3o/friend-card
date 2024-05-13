import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';


export const GLogin = () => {
    const [user, setUser] = useState<any>({})
    const navigate = useNavigate()

    const handleOnSuccess = (credentialResponse: any) => {
        console.log('credential response:', credentialResponse)
        const userObject = jwtDecode(credentialResponse?.credential);
        console.log(userObject)
        setUser(userObject)
        const signInDiv = document.getElementById("signInDiv");
        if (signInDiv) {
            signInDiv.hidden = true;
        }
        navigate('/profile')
    }

    const handleSignOut = (event: any) => {
        setUser({})
        const signInDiv = document.getElementById("signInDiv");
        if (signInDiv) {
            signInDiv.hidden = false
        }
        navigate('/')
    }




    //if we have no user: sign in button
    //if we have a user: show the log out button

    return (
        <div className=''>
            <div id='signInDiv'>
                <GoogleLogin
                    onSuccess={handleOnSuccess}
                    onError={() => {console.log('Login Failed');}}
                />
            </div>
            { Object.keys(user).length != 0 &&
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }
            
            { user &&
                <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                </div>
            }
        </div>
    )
}
