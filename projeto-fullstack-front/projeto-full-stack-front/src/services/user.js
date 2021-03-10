import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToListPlaylist } from "../routes/coordinator"

export const login = (body, clear, history) => {
    axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToListPlaylist(history)
        })
        .catch((err) => alert("Erro no Login!"))
}

export const signUp = (body, clear, history) => {
    axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/signup`, body)
        .then((res) => {
            console.log("token", res.data.token)
            localStorage.setItem("token", res.data.token)
            clear()
            goToListPlaylist(history)
        })
        .catch((err) => { console.log("token", err.response) 
        alert("Erro no Cadastro!")})
}