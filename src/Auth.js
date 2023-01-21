import React, { useState } from "react";
import "./auth.css";
// import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const Auth = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="AuthContainer">
      <div className="AuthBackground">
        <img
          className="AuthLogo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="AuthBtnSignIn">
          SignUp
        </button>

        <div className="AuthMethod" />
      </div>
      {signIn ? (
        <SignIn />
      ) : (
        <div className="AuthBody">
          <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
          <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
          <h3>
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </h3>
          <div className="AuthInput">
            <form>
              <input type="email" placeholder="Indirizzo email" />

              <button
                onClick={() => setSignIn(true)}
                className="AuthGetStarted"
              >
                Inizia
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
