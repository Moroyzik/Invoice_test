import React, { useState, useEffect } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";

import GetAvatar from "./GetAvatar";

const Authentication = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();

    if (profileJson) {
      setData(profileJson);
    }
  };

  const handleInputPassword = (e) => {
    const pass = e.target.value;

    if (pass.match(/[A-Z]/) != null) {
      console.log("big words");
    } else {
      console.log("not a good");
    }

    if (pass.match(/[0-9]/) != null) {
      console.log("nums words");
    } else {
      console.log("not a good");
    }

    if (pass.match(/[!@#$%^&*]/) != null) {
      console.log("special chars");
    } else {
      console.log("not a good");
    }

    if (pass.length > 7) {
      console.log("length password");
    } else {
      console.log("not a good");
    }

    setPassword(e.target.value);
  };

  return (
    <div className="auth-page">
      <h1 className="auth-login">Sign in</h1>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputPassword}
            />
          </div>
        </div>

        <div className="login-button">
          <button
            id="btn-login"
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            onClick={submitHandler}
          >
            Sign in
          </button>
        </div>
      </form>

      <GetAvatar data={data} />
    </div>
  );
};

export default Authentication;
