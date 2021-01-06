import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import {
  ReactReduxFirebaseProvider
} from "react-redux-firebase";
import {rrfProps} from "./store";
import i18n from './i18n/i18n'
import { I18nextProvider } from 'react-i18next';
// import Loader from "./components/Loader";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   height: calc(100vh - 90px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const root = document.getElementById("root");


  ReactDOM.render(
    <Suspense fallback={(<div></div>)}>
    <React.StrictMode>
       <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>
      </I18nextProvider>
    </React.StrictMode>
    </Suspense>,
    root
  );





