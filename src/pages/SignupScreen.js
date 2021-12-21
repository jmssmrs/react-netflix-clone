import React, { useRef } from "react";
import { auth } from "../firebase";

function SignupScreen() {
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
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="max-w-lg p-16 mx-auto bg-black bg-opacity-80">
      <form className="grid flex-col">
        <h1 className="text-left text-4xl mb-5 font-bold">Sign In</h1>
        <input
          ref={emailRef}
          className="form-input"
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          className="form-input"
          placeholder="Password"
          type="password"
        />
        <button
          className="py-3 px-5 text-base text-white rounded-md bg-netflix-signInBtn font-semibold border-none cursor-pointer mt-5"
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-left mt-7">
          <span className="text-gray-400">New to Netflix? </span>
          <span
            className="hover:cursor-pointer hover:underline"
            onClick={register}
          >
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
