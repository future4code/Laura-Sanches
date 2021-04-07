import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {PlaylistContainer, ScreenContainer} from './styled'

const PlaylistDetailPage = () => {
    const playlist = useRequestData([], `https://backend-fullstack-labenu.herokuapp.com/music/${id}`)

    useProtectedPage()
    return(
        <ScreenContainer>
            <PlaylistContainer>
                <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{playlist.title}</Typography>
                <Typography align={'center'}>{playlist.author}</Typography>
            </PlaylistContainer>
        </ScreenContainer>
    )
}

export default PlaylistDetailPage;