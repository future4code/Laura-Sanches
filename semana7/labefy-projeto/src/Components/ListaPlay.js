import React from "react"
import axios from "axios"
import styled from "styled-components"

const BotaoDeApagarPlaylist = styled.button`
    display: inline-flex;
    background-color: red;
    color: yellow;
    border-radius: 15px;
    
    &:hover{
        cursor: pointer;
    }
`
const DivLista = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px; 
    
    p {
        &:hover{
            cursor:crosshair;
        }
    }
`
class ListaPlay extends React.Component {
    state = {
        listaPlaylists: [],
        listaMusicas: []
    };
    componentDidMount =() => {
        this.pegaPlaylists();
    };
    pegaPlaylists =() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
            headers: {
                Authorization: "carlos-augusto-dumont"
            }
        }).then((response) => {
            
            this.setState({ listaPlaylists: response.data.result.list})
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message);
        })
    };
    deletarPlaylist = (idPlaylist) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`, 
        {
            headers: {
                Authorization: "carlos-augusto-dumont"
            }
        }).then((response) => {
            alert("Playlist apagada!");
            this.pegaPlaylists();
        }).catch((error) => {
            console.log(error.message);
        })
    };
    pegaMusicasDaPlaylist = (idPlaylist) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`,
        {
            headers: {
                Authorization: "carlos-augusto-dumont"
            }
        }).then((response) => {
            this.setState({ listaMusicas: response.data.result.tracks})
        }).catch((error) => {
            console.log(error.message)
        })
        
    }
    render() {
        
        const novaListaDePlaylists = this.state.listaPlaylists.map((playlist) => {
            return (
                <DivLista>
                    <p key={playlist.id} onClick={() => this.pegaMusicasDaPlaylist(playlist.id)}>
                        {playlist.name}
                        <BotaoDeApagarPlaylist onClick={() => this.deletarPlaylist(playlist.id)}>
                            Apagar
                        </BotaoDeApagarPlaylist>
                    </p>
                </DivLista>
            )
        })
        
    return <div>{novaListaDePlaylists}</div>
        
    }
    
  }
  
  export default ListaPlay;

