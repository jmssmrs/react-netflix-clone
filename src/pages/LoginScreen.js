import React, { useState } from "react";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-full"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'url("https://www.slashgear.com/wp-content/uploads/2020/10/netflix.jpg")',
        backgroundPosition: "center no-repeat",
      }}
    >
      <div className="">
        <img
          className="fixed left-0 w-40 pl-5"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => setSignIn(true)}
          className="fixed right-5 top-5 px-5 py-3 text-white bg-netflix-signInBtn border-none font-semibold"
        >
          Sign In
        </button>
        <div className="w-full h-screen bg-opacity-40 bg-black login-gradient" />
      </div>
      <div className="z-10 text-white p-5 absolute top-1/4 text-center mx-auto w-full left-0 right-0">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1 className="text-5xl mb-5 font-bold">
              Unlimited Films, TV Programmes and more.
            </h1>
            <h2 className="text-3xl font-normal mb-8">
              Watch anywhere. Cancel at anny time.
            </h2>
            <h3 className=" text-xl font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className=" p-3 m-5">
              <form>
                <input
                  className=" p-3 outline-0 h-14 w-4/12 max-w-xl border-none mr-1.5"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className=" py-4 px-5 text-white bg-netflix-signInBtn border-none font-semibold cursor-pointer"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
