import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {withRouter, Link, useParams, useLocation} from 'react-router-dom';
import * as AuthActions from '../../store/actions/authActions';
import Login from '../partials/Login';
import Signup from '../partials/Signup';

function Auth(){
  const auth = useSelector(state => ({...state.auth}));
  const dispatch = useDispatch();
  const location = useLocation();


  return (
    <div className='auth-wrapper'>
      {location.pathname === '/signup' ?
      <Signup />
      :
      <Login />
      }
    </div>
  )


}

export default Auth;