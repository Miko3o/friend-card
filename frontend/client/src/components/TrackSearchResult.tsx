import React from 'react'


type TrackSearchResultProps = {
    track: any
    chooseTrack: any
}

export const TrackSearchResult = (props: TrackSearchResultProps) => {

    function handlePlay() {
        props.chooseTrack(props.track)
    }

    return (
        <div
            style={{ cursor: "pointer" }}
            onClick={handlePlay}
        >
            <img src={props.track.albumUrl} style={{height: '64px', width: '64px'}} />
            <div>{props.track.title}</div>
            <div>{props.track.artist}</div>
        </div>
    )
}
