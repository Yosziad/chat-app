import React,{useState, useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Login(){

  const auth = useSelector(state => ({...state.auth}));
  const chat = useSelector(state => ({...state.chat}));
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.target.value), []);
  
  const onSubmit = useCallback(
		(e) => {
      e.preventDefault();
      if(chat.socket){
        chat.socket.send(JSON.stringify({
          type: 'LOGIN',
          data: {
            email,
            password
          }
        }))
      }
		},
		[chat.socket, email, password]
	);


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
        <div className='form-wrapper'>
      <h3>Login</h3>
      <form onSubmit={onSubmit}
      >
      <p>Don't have an account? <Link to='/signup'>Sign up</Link> </p>
        <div className='form-group'>
          <label>Email</label>
          <input 
            type='email'
            className='form-control'
            placeholder='Email'
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input 
            type='password'
            className='form-control'
            placeholder='Password'
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Login
        </button>
      </form>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Login;