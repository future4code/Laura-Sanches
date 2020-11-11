import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    activityData: null
  };

  componentDidMount() {
    console.log("DID MOUNT");
    this.fetchActivity();
  }

  fetchActivity = () => {
    const apiUrl = "https://www.boredapi.com/api/activity";
    axios.get(apiUrl).then((response) => {
      // handle success
      console.log("RESPOSTA", response);
      this.setState({ activityData: response.data });
    });
  };

  render() {
    console.log("ATIVIDADE", this.state.activityData);

    return (
      <div>
        <button onClick={this.getActivity}>Sugerir atividade</button>
        {this.state.activityData && (
          <div>
            <p>Nome: {this.state.activityData.activity}</p>
            <p>Tipo: {this.state.activityData.type}</p>
            <p>
              Número de participantes: {this.state.activityData.participants}
            </p>
            <p>Preço: {this.state.activityData.price}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;