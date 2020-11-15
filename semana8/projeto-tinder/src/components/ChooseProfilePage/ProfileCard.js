import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'

const ProfileCardContainer = style.div`
    margin: 16px;
    border: 1px solid black;
`

const ProfileInfo = style.div`
    padding: 0 16px;
`

function ProfileCard(props) {
    return(
        <ProfileCardContainer>
            <img src={profile.photo}/>
            <ProfileInfo>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio} </p>
            </ProfileInfo>
        </ProfileCardContainer>
    )
}

export default ProfileCard;