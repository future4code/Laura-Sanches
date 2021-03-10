import React from 'react';
import {ScreenContainer} from './styled';
import Button from '@material-ui/core/Button';
import SignUpForm from './SignUpForm';

function SignUpPage() {
    return (
        <ScreenContainer>
            <img src="https://i.pinimg.com/564x/2f/56/52/2f565214a0f6d7aedb521d4bf5e18d8d.jpg" width="200px"></img>
            <SignUpForm />
        </ScreenContainer>
    );
}

export default SignUpPage;