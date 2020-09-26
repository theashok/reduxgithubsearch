import { combineReducers } from "redux";
import { GITHUB_FEATURE_KEY, githubReducer } from "./github/github.reducer";

let rootReducer = combineReducers({
  [GITHUB_FEATURE_KEY]: githubReducer,
});

export { rootReducer };
