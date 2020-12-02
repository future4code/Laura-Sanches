import React from 'react'
import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/FormContainer/FormTitle/PageTitle'


const HomePage = () => {
  return <div>
    <PageTitle title={'LabeX'}/>
    <ButtonsContainer>
      <Link to={'/login'}>
        <Button variant={'outlined'} color={'secondary'}>Área do administrador</Button>
      </Link>
      <Link to={'/inscricao'}>
        <Button variant={'contained'} color={'primary'}>Quero me candidatar!</Button>
      </Link>
    </ButtonsContainer>
  </div>
}

export default HomePage