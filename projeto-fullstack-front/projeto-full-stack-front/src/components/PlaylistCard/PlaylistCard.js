import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {PlaylistCardContainer, PlaylistCardContent} from './styled';

const PlaylistCard = (props) => {
    return(
        <PlaylistCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia 
                    component={'img'}
                    alt={props.title}
                    height={'150px'}
                    image={props.image}
                    title={props.title}
                />

                <PlaylistCardContent>
                    <Typography align={'center'}>
                        {props.title}
                    </Typography>
                </PlaylistCardContent>
            </CardActionArea>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard;