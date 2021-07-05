import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../styles/styledcomponents';
import {auth} from '../firebase';
import { useHistory } from 'react-router-dom';


const SingUp = () => {
    const classes = useStyle();
    const [email, setEmail]= useState("");
    const [password,setPassword]= useState("");
    const history= useHistory();

    const singIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(authUser =>history.push("/"))
            .catch((err)=>alert(err.message))
    }

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(authUser =>history.push("/"))
            .catch((err)=>alert(err.message))
    }

    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>
                Iniciar Sesión
            </Typography>
            <form className={classes.form}>
                
                <NetflixInput 
                    value={email} 
                    onChange={(e) =>setEmail(e.target.value)} 
                    type="email"
                    placeholder="Email" 
                    className={classes.email}/>
                
                <NetflixInput value={password} 
                    onChange={(e) =>setPassword(e.target.value)} 
                    type="password"
                    placeholder="Password" 
                    className={classes.password}/>
                
                <NetflixButton 
                    onClick={singIn} 
                    type="submit" 
                    wide="medium">
                        Iniciar Sesión
                </NetflixButton>
                <Typography variant="subtitle2" className={classes.subtitle2}>
                    Nuevo en Netflix ?{"  "}
                    <span 
                        className={classes.singupLink}
                        onClick={register}>
                            Registrarse.{" "}
                    </span>
                </Typography>
            </form>
        </div>
    )
}

const useStyle = makeStyles((theme)=>({
    root:{
        maxWidth:"350px",
        width:"20rem",
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alineItems:"center",
        "& h5":{
            textAlign: "center",
            margin:theme.spacing(4),
            width:"70%",
            
        }
    },
    form:{
        width:"100%",
    },
    email:{
        marginBottom:theme.spacing(2)
    },
    password:{
        marginBottom:theme.spacing(4)
    },
    subtitle2: {
        marginTop: theme.spacing(1)
    },
    singupLink: {
        color:"red",
        cursor:"pointer",
        "&:hover":{
            textDecoration: "underline",
        }
    },
}));

export default SingUp
