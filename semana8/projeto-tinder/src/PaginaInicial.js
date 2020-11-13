import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Matches from './Matches';


const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    border: 1px solid black;
    height: 45em;
    width:25em;
    margin: auto;
`

const Cabeçalho = styled.div`
    font-size: 5px;
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    margin-top: 2em;
`

const BotaoEmbaixo = styled.div`
    font-size: 5px;
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    margin-top: 10em;
`

const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 2em;
`

const Descricao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function PaginaInicial (){
    const [people, setPeople] = useState([]);
    const [trocaTela, setTrocaTela] = useState(true);


    useEffect(() => {
        getPeople();
    }, []);

    const getPeople = () => {
    axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Laura Sanches Dumont/person")
        .then(response => {
            setPeople(response.data.profile);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const onClickTelaMatches = () => {
        setTrocaTela(!trocaTela);
    }

    return(
        <DivPrincipal>
        {trocaTela ? <Matches/> : 
            
            <div>
            <Cabeçalho>
            <Fab aria-label="perfil">
                <PersonIcon style={{ color: grey[500] }}/>
            </Fab>
            <Fab aria-label="imagem">
                <WhatshotIcon style={{ color: orange[500] }}/>
                </Fab>
            <Fab aria-label="mensagens" onClick={onClickTelaMatches()}>
                <ForumIcon style={{ color: grey[500] }}/>
            </Fab>
            </Cabeçalho>

            <div>
                <Imagem >
                    <img src={people.photo} width="300px" height="350px"/>
                </Imagem>
                <Descricao>
                    <p> {people.age} </p>
                    <p> {people.name} </p>
                    <p> {people.bio} </p>
                </Descricao>
            </div>

            <BotaoEmbaixo>
                <Fab aria-label="deslike">
                    <CloseIcon color="secondary"/>
                    </Fab>
                <Fab aria-label="like">
                    <FavoriteIcon style={{ color: green[500] }}/>
                </Fab>
            </BotaoEmbaixo>
            </div>
        }

       </DivPrincipal>
    );
}
    

export default PaginaInicial;