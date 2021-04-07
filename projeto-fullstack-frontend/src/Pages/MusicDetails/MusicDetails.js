import React, { useState, useEffect } from 'react'
import api from '../../Service/api';
import { useParams, useHistory } from 'react-router-dom'
import { ContainerMusicDetails } from '../../styled/global'

export default function MusicDetails(props) {
    const [musicDetails, setMusicDetails] = useState([])
    const [genreMusic, setGenreMusic] = useState([])
    const [token, setToken] = useState(localStorage.getItem("token"))
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if (token === null) {
            alert("Indique um email e senha para continuar");
            history.push("/login");
        }
        getMusicById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const getMusicById = () => {
        const axiosConfig = {
            headers: {
                Authorization: token
            }
        }
        api
            .get(`music/${id}`, axiosConfig)
            .then((response) => {
                setMusicDetails(response.data.music[0]);
                setGenreMusic(response.data.genre)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const listOfGenres = genreMusic.map((genre) => {
        return (
            <span>
                {genre}
            </span>
        );
    })
    return (
        <ContainerMusicDetails>
            <div className="video">
                <iframe width="349" height="388" src={musicDetails.file} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="music-infos">
                <img width="300px" heigth="300px" src={musicDetails.url_photo} alt={musicDetails.title} />
                <p>Título: {musicDetails.title}</p>
                <p>Artista: {musicDetails.author}</p>
                <p>Album: {musicDetails.album}</p>
                Gêneros: {listOfGenres}
            </div>

        </ContainerMusicDetails>
    );
}