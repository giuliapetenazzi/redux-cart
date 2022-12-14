import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch
    dispatch(authActions.login());
  };
  const goToRegistration = (e) => {
    e.preventDefault();
    // dispatch
    dispatch(authActions.goToRegistration());
  };
  const isRegistering = useSelector((state) => state.auth.isRegistering);

  return (
      <div className="container">
        <h1>Login</h1>{" "}
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Id</label>
          <input type="text" name="id" id="id" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        {
          !isRegistering && <button onClick={goToRegistration}>
              Go to sign in
          </button>
        }
        </div>
  );
};

export default Auth;