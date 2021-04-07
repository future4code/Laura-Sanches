import React from 'react';
import {ScreenContainer, SignUpButtonContainer} from './styled';
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import {goToSignUp} from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

function LoginPage({setRightButtonText}) {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <img src="https://i.pinimg.com/564x/2f/56/52/2f565214a0f6d7aedb521d4bf5e18d8d.jpg" width="200px"></img>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
            <Button
                onClick={() => goToSignUp(history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
                margin={"normal"}
            >Não possui conta? Cadastre-se</Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    );
}

export default LoginPage;