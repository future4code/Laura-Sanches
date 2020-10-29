import axios from "axios";
import React from "react";
import styled from "styled-components";

const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
`;

const Alinhar = styled.p`
  text-align: center;
`

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "severo-dumont"
  }
};

class UserListPage extends React.Component {
  state = {
    userList: []
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ userList: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteUser = (userId) => {
    axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderUserList = this.state.userList.map((usuario) => {
      return (
        <Alinhar key={usuario.id}>
          {usuario.name}
          <DeleteButton onClick={() => this.deleteUser(usuario.id)}>
            X
          </DeleteButton>
        </Alinhar>
      );
    });

    return <div>{renderUserList}</div>;
  }
}

export default UserListPage;
