import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends react.Compontends {
  render() {
    return (
      <div className='app-container'>
        <Post
          nomeUsuario={'Laís'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}  
        />

        <Post
          nomeUsuario={'Laura'}
          fotoUsuario={'https://super.abril.com.br/wp-content/uploads/2019/04/si_cachorroinstagram_home.png'}
          fotoPost={'https://super.abril.com.br/wp-content/uploads/2019/04/si_cachorroinstagram_home.png'}
        />

<Post
          nomeUsuario={'Caio'}
          fotoUsuario={'https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg'}
          fotoPost={'https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg'}  
        />
      </div>
    );
  }
}

export default App;
