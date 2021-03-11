import React from 'react';
import {ScreenContainer} from './styled';
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

function SignUpPage({setRightButtonText}) {
    useUnprotectedPage()
    return (
        <ScreenContainer>
            <img src="https://i.pinimg.com/564x/2f/56/52/2f565214a0f6d7aedb521d4bf5e18d8d.jpg" width="200px"></img>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    );
}

export default SignUpPage;