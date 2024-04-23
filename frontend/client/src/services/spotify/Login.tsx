import React from 'react'

const clientID = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export const Login = () => {
  return (
    <div>
        <a href={AUTH_URL}>
            <button>
                Login
            </button>
        </a>
    </div>
  )
}
