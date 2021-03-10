import {useHistory} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import {goToListPlaylist} from '../routes/coordinator';

const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            goToListPlaylist(history)
        }
    }, [history])
}

export default useUnprotectedPage;