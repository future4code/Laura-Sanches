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

const ProfilePicture = style.img`
    width: 100%;
    display: block;
    height: 350px;
`

function ProfileCard(props) {
        const [profile, setProfile] = useState({})
        const getProfile = () => {
            axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sanches/person').then(response => {
                setProfile(response.data.profile)
            }).catch(error => {
                console.log(error)
            })
        }
    
        useEffect(() => {
            getProfile()
        }, [])

    return(
        <ProfileCardContainer>
            <ProfilePicture src={profile.photo}/>
            <ProfileInfo>
                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio} </p>
            </ProfileInfo>
        </ProfileCardContainer>
    )
}

export default ProfileCard;