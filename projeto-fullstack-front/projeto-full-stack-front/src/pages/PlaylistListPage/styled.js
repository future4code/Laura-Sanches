import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const PlaylistListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 30px;
`

export const AddPlaylistButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`