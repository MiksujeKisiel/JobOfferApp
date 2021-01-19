import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./store";
import i18n from "./i18n/i18n";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { I18nextProvider } from "react-i18next";
import Loader from "./components/Items/Loader/Loader";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  return children;
}

const root = document.getElementById("root");

ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
              <App />
            </AuthIsLoaded>
          </ReactReduxFirebaseProvider>
        </Provider>
      </I18nextProvider>
    </React.StrictMode>
  </Suspense>,
  root
);
