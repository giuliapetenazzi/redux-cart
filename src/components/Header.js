import React from "react";
import Cart from "./Cart";
import "./Header.css";
//import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";


const Header = () => {

  const dispatch = useDispatch();
  const logout = (e) => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
            
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
