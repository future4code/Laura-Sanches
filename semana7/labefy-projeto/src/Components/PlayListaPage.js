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
    Authorization: "Laura Sanches Dumont"
  }
};

class PlayListPage extends React.Component {
  state = {
    playList: []
  };

  componentDidMount = () => {
    this.getAlPlays();
  };

  getAllPlays = () => {
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
        alert("Playlist deletada com sucesso!");
        this.getAllPlays();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderPlayList = this.state.playList.map((play) => {
      return (
        <Alinhar key={play.id}>
          {play.name}
          <DeleteButton onClick={() => this.deleteUser(play.id)}>
            X
          </DeleteButton>
        </Alinhar>
      );
    });

    return <div>{renderPlayList}</div>;
  }
}

export default PlayListPage;
