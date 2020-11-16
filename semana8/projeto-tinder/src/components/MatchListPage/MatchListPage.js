import React, {useState, useEffect} from 'react';
import style from 'styled-components';
import axios from 'axios'
import MatchListItem from './MatchListItem';

const ListContainer = style.div`
padding: 8px;
`

function MatchListPage () {
    const [matches, setMatches] = useState([]);

useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sanches/matches') .then(response => {
        setMatches(response.data.matches)
    });
}, []);

    return(
        <ListContainer>
            {matches.map(profile => {
                return <MatchListItem profile={profile} />
            })}
        </ListContainer>
    )
}

export default MatchListPage;