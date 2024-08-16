import Footer from "../Footer";
import UserNavBar from "./userNavbar";
import profileimg from "./images/blank-profile-picture.webp";
import { useContext, useEffect, useState } from "react";
import { Admincontext } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";

export const Profile = () => {
  const [update, setUpdate] = useState(false);
  const { username, setUserNameContext } = useContext(Admincontext);
  const [profiledata, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    jobrole: "",
    about: "",
  });
  const [formdata, setFormData] = useState({
    username: username,
    name: "",
    email: "",
    phone: "",
    jobrole: "",
    about: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8080/user/profile/update/${username}`,
        formdata
      );
      toast.success("Profile Update successfully");
    } catch (e) {
      toast.error("Profile Update Failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/profile/get/${username}`);
        setProfileData(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }, 10);
  
    return () => clearTimeout(timer);
  }, [username]);

  return (
    <>
      <UserNavBar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-12">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-6">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={profileimg}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    alt="Profile"
                  />
                  <h1 className="text-xl font-bold">{profiledata.name}</h1>
                  <p className="text-gray-700">{profiledata.jobrole}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => setUpdate(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Update
                    </button>
                    <a
                      href="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">
                  {profiledata.about}
                </p>

                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on
                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds LinkedIn"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds YouTube"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Facebook"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds Instagram"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.8 2.1 184.8 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zm-48.5 224.5c-7.8 19.5-22.9 34.6-42.3 42.3-29.3 11.7-99 9-132.7 9s-103.4 2.6-132.7-9c-19.5-7.8-34.6-22.9-42.3-42.3-11.7-29.3-9-99-9-132.7s-2.6-103.4 9-132.7c7.8-19.5 22.9-34.6 42.3-42.3 29.3-11.7 99-9 132.7-9s103.4-2.6 132.7 9c19.5 7.8 34.6 22.9 42.3 42.3 11.7 29.3 9 99 9 132.7s2.7 103.4-9 132.7z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              {update && (
                <div className="mt-8 bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Update Profile</h2>
                  <form onSubmit={handleSubmit} onChange={handleChange}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                          First Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={formdata.name}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="John"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                          Email
                        </label>
                        <input
                          name="email"
                          value={formdata.email}
                          type="email"
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                          Phone
                        </label>
                        <input
                          name="phone"
                          value={formdata.phone}
                          type="tel"
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="+919123456788"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                          Job Type
                        </label>
                        <input
                          name="jobrole"
                          value={formdata.jobrole}
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Software Developer"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        About
                      </label>
                      <textarea
                        name="about"
                        value={formdata.about}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter something about yourself..."
                      ></textarea>
                    </div>
                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setUpdate(false)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        name="savebutton"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
