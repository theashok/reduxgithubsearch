import {
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
} from "./github.actionTypes";

export const GITHUB_FEATURE_KEY = "github";
let initialState = {
  loading: false,
  profile: {},
  repos: [],
  errorMessage: "",
};

let githubReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: payload,
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export { githubReducer };
