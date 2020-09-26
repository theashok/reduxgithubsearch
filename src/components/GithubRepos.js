import React from "react";
import { useSelector } from "react-redux";
import { GITHUB_FEATURE_KEY } from "../Redux/github/github.reducer";

let GithubRepos = () => {
  // fetch data directly from REDUX store
  let reposInfo = useSelector((state) => {
    return state[GITHUB_FEATURE_KEY];
  });
  return (
    <React.Fragment>
      {reposInfo.repos.length > 0 ? (
        <React.Fragment>
          <div className="row">
            <div className="col">
              <div className="card mt-3">
                <div className="card-header">
                  <p className="h4">Your Repositories</p>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    {reposInfo.repos.map((repo) => {
                      return (
                        <li className="list-group-item d-flex justify-content-around">
                          <p className="h5">
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {repo.name}
                            </a>
                          </p>
                          <span className="badge badge-success">
                            {repo.stargazers_count} Stars
                          </span>
                          <span className="badge badge-primary">
                            {repo.watchers_count} Watches
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};
export default GithubRepos;
