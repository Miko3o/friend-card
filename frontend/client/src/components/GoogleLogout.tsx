import { GoogleLogout } from 'react-google-login'

const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;


export const GLogout = () => {

    const onSuccess = () => {
        console.log("Log out successfull!")


    
    return (
        <div id="signOutGutton">
            <GoogleLogout
                clientId={clientID}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
    }
}
