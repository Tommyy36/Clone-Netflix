import React from "react";
import "./Profile.css";
import Nav from "./Components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="body-profile">
        <h1>Modifica profilo</h1>
        <div className="info-profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <button onClick={() => auth.signOut()} className="profile-btn">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
