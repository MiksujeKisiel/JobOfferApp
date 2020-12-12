import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import Loader from './components/Loader';
import styled from 'styled-components';

const Wrapper = styled.div`
height: calc(100vh - 90px);
display: flex;
align-items: center;
justify-content: center;
`

const root = document.getElementById('root');

ReactDOM.render(<Wrapper><Loader/></Wrapper>, root)

store.firebaseAuthIsReady.then(() =>{
  ReactDOM.render(
    <React.StrictMode>
          <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    root
  
  );
})




