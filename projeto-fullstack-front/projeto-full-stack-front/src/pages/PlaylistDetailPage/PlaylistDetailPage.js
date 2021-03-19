import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import {PlaylistContainer, ScreenContainer} from './styled'

const PlaylistDetailPage = () => {
    const params = useParams()
    const playlist = useRequestData([], `https://backend-fullstack-labenu.herokuapp.com/music/${params.id}`) [0]

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