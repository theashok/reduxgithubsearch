import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import GithubSearchApp from "./components/GithubSearchApp";
import { store } from "./Redux/store";

let App = () => {
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">
          React Hooks with Github Profile Search
        </a>
      </nav> */}
      <Provider store={store}>
        <GithubSearchApp />
      </Provider>
    </React.Fragment>
  );
};
export default App;
