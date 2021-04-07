import React, { useState } from 'react'
import { ListOfCheckbox } from '../../styled/ListOfCheckBox'
import { BaseContainer } from '../../styled/loginandsignup'
import { FirstButton } from '../../styled/global';
//import { Link } from 'react-router-dom';

export default function Menu() {
    const [token] = useState(localStorage.getItem("token"))
    const [genre, setGenre] = useState([])
    const [input, setInput] = useState({
        title: '',
        author: '',
        date: '',
        file: '',
        album: '',
        url_photo: ''
    })

    const [checkbox, setCheckbox] = useState({
        AXE: '',
        FUNK: '',
        SERTANEJO: '',
        MPB: '',
        ROCK: '',
        HIPHOP: '',
        CLASSICA: '',
        GROOVE: '',
        RAP: '',
        REGGAE: '',
        SAMBA: '',
        FORRÓ: '',
        OUTRO: '',
        ELETRONICA: ''
    })

    const genres = [
        'AXE',
        'FUNK',
        'SERTANEJO',
        'MPB',
        'ROCK',
        'HIPHOP',
        'CLASSICA',
        'GROOVE',
        'RAP',
        'REGGAE',
        'SAMBA',
        'FORRO',
        'OUTRO',
        'ELETRONICA'
    ]

    const handleInputForm = ((event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value });
    })

    const handleChangeCheckbox = ((event) => {
        const { name, value } = event.target
        setCheckbox({ ...checkbox, [name]: value });
        setGenre([...genre, name])
    })


    const onClickCreateMusic = (event) => {
        event.preventDefault()
        const axiosConfig = {
            headers: {
                Authorization: token
            }
        }
        const body = {
            title: input.title,
            author: input.author,
            date: input.date,
            file: input.file,
            album: input.album,
            url_photo: input.url_photo,
            genre: genre
        }

        api
            .post("/music/createMusic", body, axiosConfig)
            .then((response) => {
                console.log(response)
                alert("Música criada com sucesso!")
                setInput({
                    title: '',
                    author: '',
                    date: '',
                    file: '',
                    album: '',
                    url_photo: ''
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    const listOfCheckBox = genres.map((item) => {
        return (
            <div>
                <input
                    type="checkbox"
                    name={item}
                    value={checkbox.item}
                    onChange={handleChangeCheckbox} />
                <p>{item}</p>
            </div>
        );
    })

    return (
        <BaseContainer>
            <div className="header-music">Crie sua própria música!</div>
            <div className="content-music">
                <div className="form-create-music">
                    <div className="form-group">
                        <p>Título:</p>
                        <input
                            name="title"
                            value={input.title}
                            onChange={handleInputForm}
                            type="text"
                            required />

                        <p>Autor:</p>
                        <input
                            name="author"
                            value={input.author}
                            onChange={handleInputForm}
                            type="text"
                            required />

                        <p>Album:</p>
                        <input
                            name="album"
                            value={input.album}
                            onChange={handleInputForm}
                            type="text"
                            required />

                        <p>Data de criação:</p>
                        <input
                            name="date"
                            value={input.date}
                            onChange={handleInputForm}
                            type="text"
                            required />

                        <p>Código de incorporação (youtube):</p>
                        <input
                            name="file"
                            value={input.file}
                            onChange={handleInputForm}
                            type="text"
                            required />

                        <p>Imagem de capa:</p>
                        <input
                            name="url_photo"
                            value={input.url_photo}
                            onChange={handleInputForm}
                            type="text"
                            required />

                    </div>

                </div>
                <ListOfCheckbox>
                    <p>Selecione os gêneros: </p>
                    <div className="list">{listOfCheckBox}</div>
                    <FirstButton onClick={onClickCreateMusic} type="button" className="btn-create-music" >
                        <span>Criar</span>
                    </FirstButton>
                </ListOfCheckbox>

            </div>

        </BaseContainer>
    );
}