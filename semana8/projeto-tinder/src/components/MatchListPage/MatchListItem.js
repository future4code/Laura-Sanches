import React from 'react';
import style from 'styled-components';

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
    height: 50px;
    width: 50px;
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