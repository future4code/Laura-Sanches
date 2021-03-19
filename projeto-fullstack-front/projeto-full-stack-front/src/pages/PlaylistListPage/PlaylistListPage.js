import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import {PlaylistListContainer, AddPlaylistButton} from './styled';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import useRequestData from '../../hooks/useRequestData';
import {Add} from '@material-ui/icons';
import { goToAddPlaylist, goToDetailPlaylist } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const PlaylistListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const playlists = useRequestData([], 'https://backend-fullstack-labenu.herokuapp.com/user/feed')

    const onClickCard = (id) => {
      goToDetailPlaylist(history, id)
    }

    const playlistCards = playlists && playlists.feed && playlists.feed.result && playlists.feed.result.musics.map((playlist) => {
        return (
            <PlaylistCard
              key={playlist.playlist_id}
              title={playlist.title}
              file={playlist.file}
              author={playlist.author}
              date={playlist.date}
              onClick={() => onClickCard(playlist.playlist_id)}
            />
          )
    })

    return(
        <PlaylistListContainer>
            {playlistCards}
            <AddPlaylistButton
              color={"primary"}
              onClick={() => goToAddPlaylist(history)}
            >
            <Add/>
            </AddPlaylistButton>
        </PlaylistListContainer>
    )
}

export default PlaylistListPage;