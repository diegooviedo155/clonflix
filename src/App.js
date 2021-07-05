import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import { makeStyles } from '@material-ui/core';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';
import { useEffect } from 'react';



function App() {
  const user = useSelector(selectUser);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout)
      }
    })
    return unsubscribe
  },[dispatch]);

  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login/>) : (
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/profile'>
                <Profile/>
              </Route>
              <Route path='/checkout'>
                <Paypal/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

const useStyle = makeStyles((theme)=>({
  root:{
    backgroundColor:"#111",
    minHeight:"100vh",
  },
}));


export default App;
