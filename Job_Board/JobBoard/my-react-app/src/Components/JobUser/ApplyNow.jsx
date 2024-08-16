import axios from "axios";
import React, { useState } from "react";
import ExperienceDetails from "./ExperienceDetail";
import formgif from "../../assets/applyjob.jpg";
import "../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import UserNavBar from "./userNavbar";
import Footer from "../Footer";
import toast from "react-hot-toast";

const ApplyNow = () => {
  const { companyname } = useParams();
  const navigater = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobilenumber: "",
    gender: "",
    age: "",
    salary: "",
    shiftTime: "",
    jobType: "",
    jobInfo: "",
    description: "",
    collegeName: "",
    collegeLocation: "",
    courseName: "",
    cgpa: "",
    startYear: "",
    endYear: "",
    company: "",
    role: "",
    expStart: "",
    expEnd: "",
    companyname: companyname,
    experience: "",
    // description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("http://localhost:8080/details/post/user", formData);
      toast.success("Job posted successfully")
      setFormData({
        username: "",
        email: "",
        mobilenumber: "",
        salary: "",
        gender: "",
        age: "",
        shiftTime: "",
        jobType: "",
        jobInfo: "",
        description: "",
        collegeName: "",
        collegeLocation: "",
        courseName: "",
        cgpa: "",
        startYear: "",
        endYear: "",
        company: "",
        role: "",
        expStart: "",
        expEnd: "",
        experience: "",
        // description: "",
      });
    } catch (e) {
      console.error("Error: " + e);
      toast.error("Error: " + e)
    }
    navigater("/getjob");
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("There was an error uploading the file!", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <UserNavBar />
      <div className="mx-auto  container px-28">
        <img src={formgif} className="mx-80 h-[400px]" />
        <form onSubmit={handleSubmit} className="mx-auto px-12 pb-8 mb-8  ">
          <div className="">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                User Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none  border border-blue-500 rounded w-full py-2 p text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="User Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobilenumber"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobilenumber"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter your Mobile Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Age
              </label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter your Age"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
              >
                <option value="">Select Gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="bg-blue-700 text-white m-4 text-center">
              Enter your Educational Details
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="collegeName"
              >
                College Name
              </label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter your college Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="collegeLocation"
              >
                College Location
              </label>
              <input
                type="text"
                name="collegeLocation"
                value={formData.collegeLocation}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter your college Location"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="courseName"
              >
                Course Name
              </label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter your course Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cgpa"
              >
                CGPA
              </label>
              <input
                type="text"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Enter your CGPA"
              />
            </div>
            <div className="flex space-x-3 my-3">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="startYear"
                >
                  Start Year
                </label>
                <input
                  type="date"
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                  placeholder="Enter your Start Year"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="endYear"
                >
                  End Year
                </label>
                <input
                  type="date"
                  name="endYear"
                  value={formData.endYear}
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                  placeholder="Enter your End Year"
                />
              </div>
            </div>
            <ExperienceDetails
              experience={{
                company: formData.company,
                role: formData.role,
                experience: formData.experience,
                expStart: formData.expStart,
                expEnd: formData.expEnd,
                description: formData.description,
              }}
              handleChange={handleChange}
            />
            <div className="py-4">
              <h2>Upload PDF</h2>
              <input type="file" onChange={handleFileChange} />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleUpload}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApplyNow;
