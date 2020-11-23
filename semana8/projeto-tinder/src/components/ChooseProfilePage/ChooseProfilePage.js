import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ProfileCard from './ProfileCard';
import ChooseButtons from './ChooseButtons';

function ChooseProfilePage () {
    const [profileToChoose, setProfileToChoose] = useState([])

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Laura Sanches Dumont/person').then(response => {
            setProfileToChoose(response.data.profile)
    })

    .catch(error => {
        console.log(error)
    })
}

    const chooseProfile = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
        }
        setProfileToChoose()

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sanches/choose-person', body).then(response => {
        getProfileToChoose()
    })

    .catch(error => {
        console.log(error)
    })
    }

useEffect(() => {
    getProfileToChoose()
}, []);

const onClickNo = () => {
    chooseProfile(false)
}

const onClickSim = () => {
    chooseProfile(true)
}


    return(
        <div>
            { profileToChoose && 
                <>
                    <ProfileCard profile={profileToChoose} />
                    <ChooseButtons onClickNo={onClickNo} onClickSim={onClickSim} />
                </>
            }
        </div>
    )
}

export default ChooseProfilePage;