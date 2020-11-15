import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'

const ProfileCardContainer = style.div`
    margin: 16px;
    border: 1px solid black;
`

const ProfilePicture = style.div`
    width: 100%
    display: block;
`

const ProfileInfo = style.div`
    padding: 0 16px;
`

function ProfileCard(props) {
    return(
        <ProfileCardContainer>
            <ProfilePicture src={ProfilePicture.photo}/>
            <ProfileInfo>
                <p>{profileToChoose.name}, {profileToChoose.age}</p>
                <p>{profileToChoose.bio} </p>
            </ProfileInfo>
        </ProfileCardContainer>
    )
}

export default ProfileCard;