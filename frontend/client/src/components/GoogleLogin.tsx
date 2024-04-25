import { GoogleLogin } from 'react-google-login'

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;


export const GLogin = () => {

    const onSuccess = (res: any) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj)

    const onFailure = (res: any) => {
        console.log('LOGIN FAILED! res: ', res)
    }
    
    return (
        <div id="signInGutton">
            <GoogleLogin
                clientId={clientID}
                buttonText={'Login'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
    }
}
