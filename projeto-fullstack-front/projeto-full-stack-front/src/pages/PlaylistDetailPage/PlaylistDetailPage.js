import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const PlaylistDetailPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>
                PlaylistDetailPage
            </h1>
        </div>
    )
}

export default PlaylistDetailPage;