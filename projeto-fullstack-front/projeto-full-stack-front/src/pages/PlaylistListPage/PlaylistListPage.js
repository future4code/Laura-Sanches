import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import {PlaylistListContainer} from './styled';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import useRequestData from '../../hooks/useRequestData';

const PlaylistListPage = () => {
    useProtectedPage()
    const playlists = useRequestData([], 'https://backend-fullstack-labenu.herokuapp.com/user/feed')
    console.log("aqui!!!!", playlists)

    const playlistCards = playlists && playlists.feed && playlists.feed.result && playlists.feed.result.musics.map((playlist) => {
        return (
            <PlaylistCard
              key={playlist.playlist_id}
              title={playlist.title}
              file={playlist.file}
              author={playlist.author}
              date={playlist.date}

            />
          )
    })

    return(
        <div>

        </div>
    )
}

export default PlaylistListPage;