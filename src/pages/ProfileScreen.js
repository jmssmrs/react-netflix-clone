import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className=" h-screen text-white">
      <Nav />
      <div className=" flex flex-col w-1/2 mx-auto pt-8pc max-w-800px">
        <h1 className=" text-6xl font-normal profile-h1-border mb-5">
          My Profile
        </h1>
        <div className="flex ">
          <img
            className=" h-28"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className=" ml-6 flex-1">
            <h2 className=" bg-gray-600 p-4 text-base pl-5">{user.email}</h2>
            <button
              className=" py-2 px-5 text-base mt-2 w-full font-white bg-netflix-signInBtn border-none cursor-pointer"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
