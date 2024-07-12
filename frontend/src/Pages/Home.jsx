import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className=" mt-24 flex justify-center ">
        <div>
          <h1 className="text-3xl block sm:text-red-800 max-sm:text-green-900 md:text-pink-400 ">
            Responsive
          </h1>
        </div>

        {userInfo ? (
          <div>
            <h1> {userInfo.firstName} </h1>
            <h1> {userInfo.lastName} </h1>
            <h1> {userInfo.age} </h1>
            <img src={userInfo.photo} className=" w-32 h-32" />
          </div>
        ) : (
          <p className=" text-blue-600 text-2xl">"No Logged In User"</p>
        )}
      </div>
    </>
  );
};

export default Home;
