import React from 'react';
import {Button} from '@material-ui/core';
import useProtectedPage from '../../hooks/useProtectedPage';

const PlaylistListPage = () => {
    useProtectedPage()


    return(
        <div>
            <h1>
                PlaylistListPage
            </h1>
        </div>
    )
}

export default PlaylistListPage;