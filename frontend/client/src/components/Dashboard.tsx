import { useState, useEffect } from 'react'
import { useAuth } from '../services/spotify/useAuth'
import { TrackSearchResult } from './TrackSearchResult'
import { Player } from './Player'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: import.meta.env.VITE_CLIENT_ID
})

export const Dashboard = ({code}: {code: string | null}) => {
  const accessToken: any = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState<Track[]>([])
  const [playingTrack, setPlayingTrack] = useState<Track>()

  interface Track {
    artist: string;
    title: string;
    uri: string;
    albumUrl: string;
    // Add more properties as needed
  }

  function chooseTrack(track: Track) {
    setPlayingTrack(track)
    setSearch('')
  }

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return
    let cancel: boolean = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      if (res?.body?.tracks?.items) {
        setSearchResults(
          res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image?.height && smallest?.height && image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url
          }
        }))
      } else {
        setSearchResults([]);
      } 
    })

  return () => {cancel = true}
  }, [search, accessToken])


  return (
    <div>
      <form>
        <input
          type='search'
          placeholder='Search Songs/Artists'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <div>
        {searchResults.map(track => (
          <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
        ))}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri || ''}/>
      </div>
    </div>
  )
}
