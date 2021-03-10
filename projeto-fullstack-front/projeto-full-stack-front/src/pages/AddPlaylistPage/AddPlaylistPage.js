import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const AddPlaylistPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>
                AddPlaylistPage
            </h1>
        </div>
    )
}

export default AddPlaylistPage;