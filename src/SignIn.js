import React from "react";
import "./signIn.css";
import { useRef } from "react";
import { auth } from "./firebase";
// import { Link } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
 
  auth
  .createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
      alert(error.message)
    })
  };

   
    const Signin = (e) => {
      e.preventDefault();

      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        ).then((authUser) => {
          console.log(authUser)
        }).catch((error) => {
          alert(error.message)
        })
    };

  return (
  
    <div className="SignIn">
      <form>
        <h1>Accedi</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={Signin} type="submit">
          Accedi
        </button>
      </form>
      <h4>
        <span className="SignInGray">Sei un nuovo utente di Netflix?</span>{" "}
          <span className="SignInLink" onClick={register}>
            Registrati.
          </span>{" "}
        
      </h4>
    </div>
 
  );
};

export default SignIn;
