import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Rows from '../components/Rows';
import requests from '../Requests'

const Home = () => {

    const classes = useStyle();


    return (
        <div className={classes.root}>
            <Header />
            <Banner />
            <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Rows title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
            <Rows title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
            <Rows title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
            <Rows title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
            <Rows title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
            <Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

const useStyle = makeStyles((theme)=>({
    root:{
    },
}));

export default Home
