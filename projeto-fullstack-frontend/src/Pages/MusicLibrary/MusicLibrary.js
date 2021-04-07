import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../Service/';
import { ContainerOfAllMusics, ContainerMusic, ButtonSeeDetails, Header } from '../../styled/global'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

const useStyles = makeStyles((theme) => ({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    button: {
        background: '#00C4CC',
        fontFamily: 'Puritan',
        justifyContent: 'center',
        marginRight: theme.spacing(4),
        width: '40px',
        height: '30px',
        marginLeft: '75%',
        '&:hover': {
            background: '#79DFE4',
        },
    },

}));
export default function MusicLibrary() {
    const history = useHistory()
    const [token, setToken] = useState();
    const [allMusics, setAllMusics] = useState([])
    const classes = useStyles();

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if (token === null) {
            alert("Indique um email e senha para continuar");
            history.push("/");
        }
        getAllMusics();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const getAllMusics = () => {
        const axiosConfig = {
            headers: {
                Authorization: token
            }
        }

        api.get("feed", axiosConfig)
            .then((response) => {
                setAllMusics(response.data.result)
                console.log(allMusics)
            }).catch((error) => {
                console.log(error)
            })
    }

    const goToMusicDetails = (id) => {
        history.push(`/musica/${id}`)
    }

    const listOfMusics = allMusics.map((music) => {
        return (

            <ContainerMusic >
                <CardActionArea class={classes.root}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={music.url_photo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {music.title}
                        </Typography>
                        <Typography variant="body2" color="white" weight="bold" component="p">
                            {music.author}
                        </Typography>
                        <Fab color="primary" aria-label="add" className={classes.button} onClick={() => {
                            goToMusicDetails(music.id);
                        }}>
                            <PlayArrowRoundedIcon />
                        </Fab>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </ContainerMusic>
        );
    })

    return <ContainerOfAllMusics > <Header /> {listOfMusics}</ContainerOfAllMusics>
}