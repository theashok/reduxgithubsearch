import React from "react";
import { useSelector } from "react-redux";
import { GITHUB_FEATURE_KEY } from "../Redux/github/github.reducer";

let GithubProfileCard = () => {
  // fetch data directly from REDUX store
  let profileInfo = useSelector((state) => {
    return state[GITHUB_FEATURE_KEY];
  });

  return (
    <React.Fragment>
      <div className="card">
        <img
          src={profileInfo.profile.avatar_url}
          alt=""
          className="img-fluid"
        />
        <div className="card-body">
          <p className="h4">{profileInfo.profile.name}</p>
          <p>{profileInfo.profile.bio}</p>
          <a
            href={profileInfo.profile.html_url}
            className="btn btn-success btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default GithubProfileCard;
