import React from 'react';
import {ScreenContainer, InputsContainer} from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';

function LoginPage() {
    const [form, onChange, clear] = useForm({ email: "", password: "" });


    const onSubmitForm = () => {
    };

    return (
        <ScreenContainer>
            <img src="https://i.pinimg.com/564x/2f/56/52/2f565214a0f6d7aedb521d4bf5e18d8d.jpg" width="200px"></img>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"} />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"} />
                </form>
            </InputsContainer>
        </ScreenContainer>
    );
}

export default LoginPage;