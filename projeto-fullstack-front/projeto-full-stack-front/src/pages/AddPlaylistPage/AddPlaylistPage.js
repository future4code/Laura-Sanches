import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { PlaylistContainer, ScreenContainer } from './styled'
import AddPlaylistsForm from './AddPlaylistsForm'
import Typography from '@material-ui/core/Typography'

const AddPlaylistPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <PlaylistContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar nova música</Typography>
        <AddPlaylistsForm/>
      </PlaylistContainer>
    </ScreenContainer>
  )
}

export default AddPlaylistPage
