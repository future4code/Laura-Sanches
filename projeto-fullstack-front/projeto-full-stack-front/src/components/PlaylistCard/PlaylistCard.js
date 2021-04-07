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
                    title={props.title}
                    file={props.file}
                    author={props.author}
                    date={props.date}
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