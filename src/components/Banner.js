import { Button, makeStyles, Typography } from '@material-ui/core';
import axios from '../axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';


const Banner = () => {
    const classes = useStyle();
    const [movie, setMovie] = useState([]);
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        };
        fetchData();
    }, [])


    return (
        <div
            className={classes.root}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className={classes.content}>
                <Typography variant="h2" components="h1">
                    {movie?.title || movie?.name || movie?.original_name}
                </Typography>
                <div className={classes.buttons}>
                    <Button>Play</Button>
                    <Button>My List</Button>
                </div>
                <Typography
                    style={{ wordWrap: "break-word" }}
                    variant="h6"
                    className={classes.description}>
                    {
                        truncate(movie?.overview, 160)
                    }
                </Typography>
            </div>
            <div className={classes.fadeButtom} />
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: "relative",
        height: "440px",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
    },
    content:{
        marginLeft: theme.spacing(4),
        paddingTop: theme.spacing(16),
        "& h2":{
            fontWeight:800,
            paddingBottom: theme.spacing(3)
        },
    },
    buttons: {
        "& button": {
            cursor: "pointer",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "5px",
            padding: theme.spacing(1, 4, 1, 4),
            marginRight: "1rem",
            backgroundColor: "rgba(51,51,51,0.5)",
        },
        "& button:hover": {
            color: "#000",
            backgroundColor: "#e6e6e6"
        }
    },
    description: {
        marginTop: theme.spacing(5),
        width: "45rem",
        lineHeight:"1.3",
        maxWidth:"380px",
        height: "80px"
    },
    fadeButtom: {
        position: "absolute",
        top: "30vh",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
    },
}));

export default Banner
