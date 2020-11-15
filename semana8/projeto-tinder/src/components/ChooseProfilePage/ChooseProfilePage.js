import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'
import ProfileCard from './ProfileCard';
import ChooseButtons from './ChooseButtons';

function ChooseProfilePage () {
    const [profileToChoose, setProfileToChoose] = useState({})

useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sanches/person').then(response => {
        setProfileToChoose(response.data.profile)
    })
}, []);

const onClickNo = () => {
    const body = {
        choice: false,
        id: profileToChoose.id
    }

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sanches/choose-person', body).then(response => {

    })

}

const onClickSim = () => {

}


    return(
        <div>
            <ProfileCard profile={profileToChoose} />
            <ChooseButtons onClickNo={onClickNo} onClickSim={onClickSim} />
        </div>
    )
}

export default ChooseProfilePage;