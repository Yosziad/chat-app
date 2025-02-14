import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
,
  document.getElementById('root')
);


reportWebVitals();
