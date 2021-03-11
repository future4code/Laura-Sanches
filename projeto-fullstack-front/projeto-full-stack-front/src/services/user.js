import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToListPlaylist } from "../routes/coordinator"

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToListPlaylist(history)
            setRightButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.message))
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`https://backend-fullstack-labenu.herokuapp.com/user/signup`, body)
        .then((res) => {
            console.log("token", res.data.token)
            localStorage.setItem("token", res.data.token)
            clear()
            goToListPlaylist(history)
            setRightButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.message))
}