import React, { useState } from "react";

import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, fetchRepos } from "../Redux/github/github.action";
import { GITHUB_FEATURE_KEY } from "../Redux/github/github.reducer";
import Spinner from "./spinner/Spinner";

let GithubSearchApp = () => {
  let dispatch = useDispatch();
  let [username, setUsername] = useState("");
  let githubStore = useSelector((state) => {
    return state[GITHUB_FEATURE_KEY];
  });

  let searchUser = (e) => {
    e.preventDefault();
    dispatch(fetchProfile(username));
    dispatch(fetchRepos(username));
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-dark bg-transparent text-white">
                <p className="h4">Github Search</p>
              </div>
              <div className="card-body">
                <form className="form-inline" onSubmit={searchUser}>
                  <div className="form-group">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      size="40"
                      type="search"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Search"
                      className="btn bg-dark bg-transparent text-white btn-sm"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <React.Fragment>
          <div className="row mt-3">
            <div className="col">
              {Object.keys(githubStore.profile).length !== 0 ? (
                <React.Fragment>
                  {githubStore.loading ? (
                    <Spinner />
                  ) : (
                    <React.Fragment>
                      <GithubProfile />
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : null}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              {githubStore.repos.length > 0 ? (
                <React.Fragment>
                  {githubStore.loading ? (
                    <Spinner />
                  ) : (
                    <React.Fragment>
                      <GithubRepos />
                    </React.Fragment>
                  )}
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};
export default GithubSearchApp;
