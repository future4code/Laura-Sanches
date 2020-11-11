import React from "react";
import FormPage from "./components/FormPage";
import UserListPage from "./components/UserListPage";

class App extends React.Component {
  state = {
    formPage: true
  };

  changePage= () => {
    this.setState({formPage: !this.state.formPage});
  };

  render(){
    const currentPage = this.state.formPage ? <FormPage /> : <UserListPage />;

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