import React from "react";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazaarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleGoogleLogin(e) {
    //console.log(auth);
    try {
      const { user } = await signInWithPopup(auth, provider);
      //console.log("response from user ", user);
      toast.success("user has been signed in");
      dispatch(
        addUser({
          _id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      );
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignOut = () => {
    try {
      signOut(auth);
      dispatch(removeUser());
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-10">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duratio n-300"
        >
          <AiOutlineGoogle size={35} />
          <span className="">sign in with Google</span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <AiFillGithub size={35} />
          <span className="">sign in with Github</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Login;
