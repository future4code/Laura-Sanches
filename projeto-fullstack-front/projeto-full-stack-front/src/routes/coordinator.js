export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/signup")
}

export const goToListPlaylist = (history) => {
    history.push("/")
}

export const goToAddPlaylist = (history) => {
    history.push("/add")
}

export const goToDetailPlaylist = (history, id) => {
    history.push(`/detail/${id}`)
}