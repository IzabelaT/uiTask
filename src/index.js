/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";

import "./index.less";
import App from "./App";
import Task from "./routes/Task";
import Settings from "./routes/Settings";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { CustomProvider } from "rsuite";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./store/store";
import { actions as d_actions } from "./store/slices/dailySlice";
import { actions as w_actions } from "./store/slices/weeklySlice";
import { actions as m_actions } from "./store/slices/monthlySlice";

import About from "./routes/About";
import NotFound from "./routes/NotFound";

import { GoogleOAuthProvider } from "@react-oauth/google";

var CLIENT_ID =
  "25256502274-6b15ibif1usnm9rtbi4blennjrvrl5lm.apps.googleusercontent.com";


ReactDOM.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <React.StrictMode>
      <BrowserRouter>
        <CustomProvider theme="dark">
          <Routes>
            <Route
              path="/"
              element={
                <Provider store={store}>
                  <App />
                </Provider>
              }
            >
              <Route
                index
                element={<Task title="daily" actions={d_actions} />}
              />
              <Route
                path="task"
                element={<Task title="daily" actions={d_actions} />}
              />
              <Route
                path="daily"
                element={<Task title="daily" actions={d_actions} />}
              />
              <Route
                path="weekly"
                element={<Task title="weekly" actions={w_actions} />}
              />
              <Route
                path="monthly"
                element={<Task title="monthly" actions={m_actions} />}
              />
              <Route path="settings" element={<Settings />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* eslint-enable */
