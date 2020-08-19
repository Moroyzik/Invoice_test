import React from "react";

const GetAvatar = ({ data }) => {
  return (
    <div className="getAvatar">
      {!data.avatar_url ? (
        " "
      ) : (
        <img className="user-img" src={data.avatar_url} alt={data.avatar_url} />
      )}
    </div>
  );
};

export default GetAvatar;
