import React from "react";
import logback from "../assets/logback.jpg";
import { useNavigate } from "react-router-dom";
function SignUpPage() {
  const navigator = useNavigate();
  return (
    <div className="container mx-auto h-screen flex items-center justify-center bg-cover bg-center img">
      <div className="flex flex-col bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl">
        <div className="mb-20">
          <p className="font-medium text-4xl text-center text-blue-400 uppercase">
            Welcome to Jobizz
          </p>
        </div>
        <div className="w-full max-w-4xl flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20">
          <div className="flex flex-col items-center justify-center flex-1 p-10 bg-[#9ebfce] border rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-700">User</h2>
            <p className="font-semibold text-center mt-5 border border-gray-300 w-full py-2 px-1 text-gray-900">
              If you are a User, click here to Sign Up
            </p>
            <button
              className="px-8 py-3 mt-5 text-lg font-semibold border rounded bg-blue-400 text-white hover:bg-blue-500"
              onClick={() => navigator("/user/signup")}
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-10 bg-[#d8a0df] text-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">Employee</h2>
            <p className="font-semibold text-center mt-5 border border-gray-100 w-full py-2 px-2">
              If you are an Employee, click here to Sign Up
            </p>
            <button
              className="px-8 py-3 mt-5 text-lg font-semibold border rounded bg-gray-100 text-blue-400 hover:bg-gray-200"
              onClick={() => navigator("/admin/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
