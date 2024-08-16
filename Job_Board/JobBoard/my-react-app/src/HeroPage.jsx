import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroPage() {
  const navigater = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex mt-20 h-[58vh]">
        <div className="w-[50%] mt-10">
          <div className=" my-10  w-[80%] mx-auto space-y-2  pb-12 ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Welcome To Jobizz
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Your gateway to a brighter career! Unleash your potential by
              exploring tailored opportunities from top-tier companies. Elevate
              your journey with Jobizz – where your dream job awaits! Empower
              your future with personalized career insights.
            </p>
            <div className="flex justify-start  pt-12  space-x-5">
              <button
                className="px-5 py-1 bg-yellow-400 rounded text-black font-medium"
                onClick={() => {
                  navigater("/loginpage");
                }}
              >
                Login
              </button>
              <button
                className="px-5 py-1 border border-yellow-400 rounded text-black font-medium"
                onClick={() => {
                  navigater("/signUpPage");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] mr-16">
          <div className="grid grid-cols-12 h-full w-full gap-5">
            <div
              data-aos="flip-left"
              className="col-span-4 bg row-span-2 rounded-3xl bg-black"
            ></div>
            <div
              data-aos="flip-left"
              className="col-span-4 bg1 row-span-1 rounded-3xl bg-green-600"
            ></div>
            <div
              data-aos="flip-left"
              className="col-span-4 bg5 row-span-2 rounded-3xl bg-red-400"
            ></div>
            <div
              data-aos="flip-left"
              className="col-span-4 bg2 row-span-2 rounded-3xl bg-orange-600"
            ></div>
            <div
              data-aos="flip-left"
              className="col-span-4 bg3 row-span-1 rounded-3xl bg-yellow-600"
            ></div>
            <div
              data-aos="flip-left"
              className="col-span-4 bg4 row-span-1 rounded-3xl bg-orange-200"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}