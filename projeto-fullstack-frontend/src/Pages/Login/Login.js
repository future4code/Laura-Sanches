import React from 'react'
import useInputValue from '../../Hooks/useInputValue'
import { useHistory } from 'react-router-dom'
import api from '../../Service/api'
import { BaseContainer } from '../../styled/loginandsignup';
import { FirstButton } from '../../styled/global';
import { Link } from 'react-router-dom'
export default function Login(props) {
    const [emailOrNickname, handleChangeEmailOrNickname, clearEmailOrNicknameInput] = useInputValue("");
    const [password, handleChangePassword, clearPasswordInput] = useInputValue("");
    const history = useHistory();

    const onClickLogin = ((event) => {
        event.preventDefault()
        let body = ''
        if (emailOrNickname.indexOf('@') === -1) {
            body = {
                email: "",
                nickname: emailOrNickname,
                password: password
            }
        } else {
            console.log('entrou no login')
            body = {
                email: emailOrNickname,
                nickname: "",
                password: password
            }
        }
        console.log(body)
        api
            .post('user/login', body)
            .then((response) => {
                localStorage.setItem('token', (response.data.token));
                localStorage.setItem('login', (true))
                clearEmailOrNicknameInput(emailOrNickname)
                clearPasswordInput(password)
                alert(`O usuario ${emailOrNickname} está logado! `)
                console.log(localStorage.getItem("token"))
                history.push('/biblioteca')

            })
            .catch((error) => {
                history.push('/')
                alert(`Este email ou senha não são válidos. Erro:${error} `)
                clearPasswordInput(password)
            })
    })

    return (
        <BaseContainer>

            <div className="content">
                <div className="form">
                    <div className="image">
                        <img src='https://github.com/anazimerer/LabeMusic-Frontend/blob/master/src/assets/login.png?raw=true' alt={"capa"} />
                    </div>
                    <div className="form-group">
                        <label>Email or nickname:</label>
                        <input
                            value={emailOrNickname}
                            type="email"
                            name="email"
                            pattern="{5,}"
                            title="Digite no mínimo 5 caracteres"
                            onChange={handleChangeEmailOrNickname}
                            required
                        />

                        <label>Senha:</label>
                        <input
                            value={password}
                            type="password"
                            name="password"
                            pattern="{6,}"
                            title="Sua senha deve ter no mínimo 6 caracteres"
                            onChange={handleChangePassword}
                            required
                        />
                    </div>



                    <div className="footer">
                        <FirstButton onClick={onClickLogin} type="button" className="btn-login-signup">
                            <span>Entrar</span>
                        </FirstButton>
                        <Link id="link" to={"/signup"}>
                            Não possui conta? Cadastre-se!
                        </Link>
                    </div>
                </div>
            </div>
        </BaseContainer>

    );
}