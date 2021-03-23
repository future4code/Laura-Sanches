import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPlaylistFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import {createPlaylist} from "../../services/playlist"
import CircularProgress from '@material-ui/core/CircularProgress'

const AddPlaylistForm = () => {
  const [form, onChange, clear] = useForm({ title: "", file: "", genresIds: "", albumId:"" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createPlaylist(form, clear, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddPlaylistFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"file"}
            value={form.file}
            onChange={onChange}
            label={'Fila'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"genresIds"}
            value={form.genresIds}
            onChange={onChange}
            label={'Gênero'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"álbum"}
            value={form.albumId}
            onChange={onChange}
            label={'Álbum'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Música</>}
        </Button>
      </AddPlaylistFormContainer>
    </form>
  )
}

export default AddPlaylistForm;
