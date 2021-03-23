import axios from "axios"

export const createPlaylist = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`https://backend-fullstack-labenu.herokuapp.com/music/createMusic`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data.message)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.message)
        setIsLoading(false)
      })
  }