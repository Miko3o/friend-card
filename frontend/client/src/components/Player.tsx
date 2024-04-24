import { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

type PlayerProps = {
    accessToken: string
    trackUri: string
}

export const Player = (props: PlayerProps) => {
    const [play, setPlay] = useState<boolean>(false)

    useEffect(() => setPlay(true), [props.trackUri])

    if (!props.accessToken) return null
    return (
        <SpotifyPlayer
            token={props.accessToken}
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={props.trackUri ? [props.trackUri] : []}
        />
    )
}
