import React from "react";
import axios from "axios";
import styled from 'styled-components';

const Formulário = styled.div`
    border: 1px solid black;
    display: flex;
    margin: 10em;
    padding: 2em;
    justify-content: center;
`

class Musicas extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "severo-dumont"
          }
        }
      )
      .then((response) => {
        alert("Usuário criado com sucesso!!");
        this.setState({ nameValue: "", emailValue: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <Formulário>
        <div>
        <p>Nome:</p>
        <input value={this.state.nameValue} onChange={this.onChangeNameValue} />
        <p>E-mail:</p>
        <input value={this.state.emailValue} onChange={this.onChangeEmailValue}/>
        <button onClick={this.createUser}>Criar Usuário</button>
        </div>
      </Formulário>
    );
  }
}

export default Musicas;