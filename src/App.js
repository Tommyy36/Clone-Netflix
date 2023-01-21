import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Profile from "./Profile";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsuscribe;
  }, [dispatch]);

  return (
    <div className="App">
    <Router>
      {!user ? (
          <Auth />
        ) : (
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/profile" element={<Profile />}>
            </Route>
          </Routes>
        )}
    </Router>
        
    </div>
  );
}

export default App;
