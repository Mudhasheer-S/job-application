import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideNavInDashboard from "./SideNavInDashboard";
import axios from "axios";
import { User } from "lucide-react";
import { Admincontext } from "../../App";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    password: "",
    companyname: "",
    email: "",
  });

  const { username, setCompanyNameInContext } = useContext(Admincontext);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/admin/get/${username}`
        );
        const data = response.data;
        setProfile({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          password: "",
          companyname: data.companyname || "",
          email: data.email || "",
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/admin/put/${username}`,
        profile
      );
      console.log(response.data);
      toast.success("Updated successfully");
      setCompanyNameInContext(profile.companyname);
      setProfile({
        ...profile,
        password: "", // Clear password field after update
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavInDashboard />
        <div className="container">
          <div className="w-[40%] mt-7 border rounded-2xl border-black mx-auto p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex-shrink-0 pt-2 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <User className="w-full h-full rounded-full" />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{`${profile.firstName} ${profile.lastName}`}</h2>
                <span className="text-sm text-gray-600">
                  {profile.companyname}
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">{profile.email}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">+91 9789456128</span>
                </span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-[40%] mx-auto mt-10">
            <div className="flex space-x-3 my-3">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                  placeholder="Enter firstname"
                  required
                />
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyname"
                value={profile.companyname}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 pl-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Change Password
              </label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 pl-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Change Your Password"
              />
            </div>
            <div className="mb-2 mt-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Change Email
              </label>
              <input
                type="text"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 pl-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Change Your email"
              />
            </div>
            <button className="w-[100%] py-1 mt-3 border border-black">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
