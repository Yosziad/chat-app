import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import setupSocket from './store/actions/chatActions';
import  Auth from './components/pages/Auth';



const App = (props) => {

  const auth = useSelector(state => ({...state.auth}));
  const chat = useSelector(state => ({...state.chat}));
  const dispatch = useDispatch();
  dispatch(setupSocket())
  

  return (
    <div className="App">
      <button onClick={e => {
        e.preventDefault();
        if(chat.socket){
          chat.socket.send(JSON.stringify({
            type: 'Hello',
            data: 'World'
          }))
        }
      }}>Send Message</button>
      <BrowserRouter>
        <Switch>

          <Route 
            path='/login'
            component={Auth}
          />
          <Route 
            path='/signup'
            component={Auth}
          />

          <Route 
            path='/'
            render={props => {
              return (
                <h1>Root</h1>
              )
            }}
          />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
