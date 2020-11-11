import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    
    userName: "",
    userEmail: ""
    
  };
  createUser = () => {
    const body = {
      "name" : this.state.userName,
      "email" : this.state.userEmail
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "carlos-augusto-dumont"
      }
    }
    ).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.message);
    })
  }
  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value});
  };
  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value});
  };
  render() {
      return (
        <div>
          <input 
          type="text"
          placeholder="Digite seu nome" 
          value={this.state.userValue} 
          onChange={this.onChangeUserValue}
          />
          <input type="e-mail" 
          placeholder="Digite seu e-mail"
          value={this.state.userEmail} 
          onChange={this.onChangeUserEmail}
          />
          <button onClick={this.createUser}>Cadastrar</button>
        </div>
      );
    }
  }
  
export default App;