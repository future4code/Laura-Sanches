import React from "react";
import Musica from "./components/musica";
import PlayListPage from "./components/PlayListPage";

class App extends React.Component {
  state = {
    musica: true
  };

  changePage= () => {
    this.setState({musica: !this.state.musica});
  };

  render(){
    const currentPage = this.state.musica ? <Musica /> : <PlayListPage />;

    return(
      <div>
        {currentPage}
        <button onClick = {this.changePage}>
          Mudar de Página
        </button>
      </div>
    );
  }
}
  
export default App;