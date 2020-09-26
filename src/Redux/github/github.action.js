import {
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
} from "./github.actionTypes";
import Axios from "axios";
import { clientID, clientSecret } from "../../components/githubCredentials";

// fetch a profile
let fetchProfile = (username) => {
  return (dispatch) => {
    dispatch({ type: FETCH_PROFILE_REQUEST });
    let dataURL = `http://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`;
    Axios.get(dataURL)
      .then((response) => {
        dispatch({ type: FETCH_PROFILE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PROFILE_FAILURE, payload: error });
      });
  };
};

// fetch repos of user
let fetchRepos = (username) => {
  return (dispatch) => {
    dispatch({ type: FETCH_REPOS_REQUEST });
    let dataURL = `http://api.github.com/users/${username}/repos?clientId=${clientID}&clientSecret=${clientSecret}`;
    Axios.get(dataURL)
      .then((response) => {
        dispatch({ type: FETCH_REPOS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_REPOS_FAILURE, payload: error });
      });
  };
};
export { fetchProfile, fetchRepos };
