import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'
import { CenterFocusStrong } from '@material-ui/icons';

const ListItemContainer = style.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;

    :hover{
        background-color: rgba(0,0,0,0.1);
    }
`

const Avatar = style.div`
    border-radius: 50%;
    margin-right: 8px;
    height: 30px;
    width: 30px;
`

function MatchListItem (props) {
    const profile = props.profile
    return(
        <ListItemContainer>
            <Avatar src={profile.photo} />
            <p>{profile.name} </p>
        </ListItemContainer>
    )
}

export default MatchListItem;