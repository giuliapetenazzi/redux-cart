import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { authActions } from "../store/auth-slice";

import "./Reg.css";

const Reg = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch
    dispatch(authActions.register());
  };
  const backToLogin = (e) => {
    e.preventDefault();
    // dispatch
    dispatch(authActions.backToLogin());
  };
 
  return (
      <div className="container">
        <h1>Sign in</h1>{" "}
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Id</label>
          <input type="text" name="id" id="id" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button className="login-btn">
            Save
          </button>
        </form>
        <button onClick={backToLogin}>
          Back to login
        </button>
      </div>
  );
};

export default Reg;