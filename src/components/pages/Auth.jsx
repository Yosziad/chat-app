import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {withRouter, Link} from 'react-router-dom';
import * as AuthActions from '../../store/actions/authActions';
import Login from '../partials/Login';
import Signup from '../partials/Signup';

function Auth(){
  const auth = useSelector(state => ({...state.auth}));
  
  return (
    <div className='auth-wrapper'>
      {this.props.match.params === 'signup' ?
      <Signup />
      :
      <Login />
      }
    </div>
  )


}

export default Auth;