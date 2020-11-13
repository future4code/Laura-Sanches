import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Matches (){
const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Laura Sanches Dumont/matches")
        .then(response => {
            setMatches(response.data.matches);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <div>
        {matches.map((people) => {
            return(
                <div>
                    <p>{people.age}</p>
                    <p>{people.name}</p>
                    <p>{people.photo}</p>
                    <p>{people.bio}</p>
                </div>
            );
        })}
        </div>
    )
}

export default Matches;