import { useState, useEffect } from 'react'
import { GLogin } from '../components/GoogleLoginButton';



export const LoginPage = () => {

    return (
        <div className="flex flex-col justify-center items-center pt-40">
            Log in!
            <GLogin />
        </div>
    )
}