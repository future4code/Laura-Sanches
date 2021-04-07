import React from 'react'
import useInputValue from "../../Hooks/useInputValue";
import api from "../../Service/api";
import { useHistory } from "react-router-dom";
import { BaseContainer } from '../../styled/loginandsignup';
import { FirstButton } from '../../styled/global';
import { Link } from 'react-router-dom'

export default function Signup(props) {
    const [name, handleChangeName] = useInputValue("");
    const [nickname, handleChangeNickname] = useInputValue("");
    const [email, handleChangeEmail] = useInputValue("");
    const [password, handleChangePassword] = useInputValue("");
    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            name: name,
            nickname: nickname,
            email: email,
            password: password,
        };
        api
            .post("/user/signup", body)
            .then((response) => {
                console.log(response);
                alert("Cadastro realizado")
                history.push('/biblioteca')
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <BaseContainer ref={props.containerRef}>
            <div className="content">
                <div className="form">
                    <div className="image">
                        <img alt="foto" src='https://github.com/anazimerer/LabeMusic-Frontend/blob/master/src/assets/cadastro.png?raw=true' />
                    </div>

                    <div className="form-group">
                        <label>Nome de usuário:</label>
                        <input
                            value={name}
                            name="name"
                            pattern="{5,}"
                            title="Digite no mínimo 5 caracteres"
                            onChange={handleChangeName}
                        />
                        <label>Nickname:</label>
                        <input
                            value={nickname}
                            name="nickname"
                            pattern="{5,}"
                            title="Digite no mínimo 5 caracteres"
                            onChange={handleChangeNickname}
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            name="email"
                            type="email"
                            title="Digite um email válido"
                            onChange={handleChangeEmail}
                        />
                        <label>Senha:</label>
                        <input
                            value={password}
                            name="password"
                            pattern="{6,}"
                            type="password"
                            onChange={handleChangePassword}
                        />
                    </div>


                    <div className="footer">
                        <FirstButton onClick={onSubmitForm} type="button" className="btn-login-signup">
                            <span>Cadastrar e entrar</span>
                        </FirstButton>
                        <Link id="link" to={"/"}>
                            Já possui conta? Clique aqui
                        </Link>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );
}