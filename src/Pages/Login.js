import { makeStyles, Typography } from '@material-ui/core';
import React, {Fragment, useState} from 'react';
import ImageLogin from '../images/herobanner.jpg';
import Logo from '../images/logo.png';
import { NetflixButton, NetflixInput } from '../styles/styledcomponents';
import SingUp from '../Pages/SingUp';

const Login = () => {
    const classes = useStyle();
    const [singIn, setSingIn] = useState(true);

    const signIn = ()=>{
        setSingIn(false)
    }

    const Netflix =()=>{
        setSingIn(true)
    }

    return (
        <div className={classes.root}>
            <img src={Logo} className={classes.logo} alt="logo" onClick={Netflix} />
            
            <div className={classes.info}>
                {
                    !singIn ? (<SingUp />) : (
                        <Fragment>
                            <NetflixButton onClick={signIn} className={classes.session}>Iniciar Sesión</NetflixButton>
                            <Typography variant="h4" gutterBottom>
                                Un limited films, TV programmes and more.
                            </Typography>
                            <Typography variant="h5">
                                Watch anywhere. Cancel at any time.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Ready yo whatch ? Enter your email to create or restart your membership.
                            </Typography>
                            <div className={classes.inputBlock}>
                                <NetflixInput placeholder="Enter your email" />
                                <NetflixButton>GER STARTED</NetflixButton>
                            </div>
                        </Fragment>
                    )
                }
            </div>

        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: "100vh",
        backgroundImage: `url(${ImageLogin})`,
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "150px",
    },
    session: {
        position: "fixed",
        zIndex: 15,
        right: 15,
        top: 20,
    },
    info: {
        color: "#fff",
        zIndex: 15,
        textAlign: "center",
        "& h4": {
            fontWeight: 800,
        },
        "& h5": {
            fontWeight: 400,
        },
    },
}));

export default Login
