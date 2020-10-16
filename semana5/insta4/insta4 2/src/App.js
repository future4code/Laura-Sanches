import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Laís'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'} 
        />

        <Post
          nomeUsuario={'Laura'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />

        <Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://picsum.photos/50/53'}
          fotoPost={'https://picsum.photos/200/153'}  
        />
        </div>
      );
    }
  }

export default App;
