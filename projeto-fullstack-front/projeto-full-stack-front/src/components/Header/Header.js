import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolBar} from './styled'
import { goToListPlaylist, goToLogin } from '../../routes/coordinator';
import {useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <AppBar position="static">
            <StyledToolBar>
            <Button onClick={() => goToListPlaylist(history)} color="inherit">Labefy</Button>
            <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
            </StyledToolBar>
        </AppBar>
    );
}

export default Header;