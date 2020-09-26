import React from "react";
import { useSelector } from "react-redux";
import { GITHUB_FEATURE_KEY } from "../Redux/github/github.reducer";

let GithubProfileDetails = (props) => {
  // fetch data directly from REDUX store
  let profileInfo = useSelector((state) => {
    return state[GITHUB_FEATURE_KEY];
  });
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <span className="badge badge-success mx-1">
            Followers : {profileInfo.profile?.followers}
          </span>
          <span className="badge badge-primary mx-1">
            Repos : {profileInfo.profile?.public_repos}
          </span>
          <span className="badge badge-warning mx-1">
            Gists : {profileInfo.profile?.public_gists}
          </span>
          <span className="badge badge-danger mx-1">
            Following : {profileInfo.profile?.following}
          </span>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              NAME : {profileInfo.profile?.name}
            </li>
            <li className="list-group-item">
              Location : {profileInfo.profile?.location}
            </li>
            <li className="list-group-item">
              Email : {profileInfo.profile?.email}
            </li>
            <li className="list-group-item">
              Company :{" "}
              <a href="!#" target="_blank" rel="noopener noreferrer">
                {profileInfo.profile?.company}
              </a>
            </li>
            <li className="list-group-item">
              Blog :{" "}
              <a href="!#" target="_blank" rel="noopener noreferrer">
                {profileInfo.profile?.blog}
              </a>
            </li>
            <li className="list-group-item">
              Member Since : {profileInfo.profile?.created_at}
            </li>
            <li className="list-group-item">
              Profile URL :{" "}
              <a href="!#" target="_blank" rel="noopener noreferrer">
                {profileInfo.profile?.html_url}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default GithubProfileDetails;
