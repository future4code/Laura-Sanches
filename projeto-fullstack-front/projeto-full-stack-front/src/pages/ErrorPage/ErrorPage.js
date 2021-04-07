import React from 'react';
import Typography from '@material-ui/core/Typography';
import {ErrorImage, ErrorPageContainer} from './styled';

const ErrorPage = () => {
    return(
        <ErrorPageContainer>
            <ErrorImage src="https://e3z7c6v7.rocketcdn.me/blog/wp-content/uploads/2019/02/274034-erro-de-http-wordpress-como-corrigir.jpg" />
            <Typography color={'primary'} variant={'h4'} align={'center'}> Error 404 - Página não encontrada </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;