import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Reg from "./components/Reg";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";

import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  /*
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log("🚀 ~ cartItems", cartItems)
  */

  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRegistering = useSelector((state) => state.auth.isRegistering);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  
  return (
    <div className="App">
        { notification && 
          <Notification type={notification.type} message={notification.message} />
        }
      { !isLoggedIn && !isRegistering && <Auth /> }
      { !isLoggedIn && isRegistering && <Reg /> }
      { isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
