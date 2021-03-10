import React from 'react';
import { InputsContainer, SignUpFormContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function SignForm() {
    const {form, handleInputChange, clear} = useForm({name:"", email: "", password: "", nickname:"" });


    const onSubmitForm = (event) => {
        event.preventDefault()
    };

    return (
        <SignUpFormContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                        name={"name"}
                        value={form.name}
                        onChange={handleInputChange}
                        label={"Name"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                        />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={handleInputChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                        />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={handleInputChange}
                        label={"Password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                        />
                    <TextField
                        name={"nickname"}
                        value={form.nickname}
                        onChange={handleInputChange}
                        label={"Nickname"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        />

                        <Button
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                        >Fazer Cadastro</Button>
                </form>
            </InputsContainer>
        </SignUpFormContainer>
    );
}

export default SignForm;