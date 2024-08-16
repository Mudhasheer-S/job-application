import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import formgif from "./images/formgif.jpg";
import Navbar from "./Navbar";
import Footer from "../Footer";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AdminLogin } from "./login";
import { Admincontext } from "../../App";

const UpdateForm = () => {
  const { id } = useParams();
  const { companyname } = useContext(Admincontext);
  const navigater = useNavigate();
  const [formData, setFormData] = useState({
    jobName: "",
    location: "",
    salary: "",
    shiftTime: "",
    jobType: "",
    briefDescription: "",
    description: "",
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
    console.log(id);
    try {
      await axios.put(`http://localhost:8080/job/updateJob/${id}`, {
        id: id,
        jobName: formData.jobName,
        companyName: companyname,
        location: formData.location,
        salary: formData.salary,
        shiftTime: formData.shiftTime,
        description: formData.description,
        jobType: formData.jobType,
        briefDescription: formData.briefDescription,
      });
      toast.success("Job Update successfully");
    } catch (e) {
      console.error("Error: " + e);
      toast.error("Job is not Updated");
    }
  };

  useEffect(() => {
    const fetchDefault = async () => {
      await axios
        .get(`http://localhost:8080/job/${id}`)
        .then((r) => setFormData(r.data));
    };
    fetchDefault();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto px-12 py-8 border border-white rounded-3xl ring-4 ring-white ring-inset ring-offset-2 "
        >
          <img src={formgif} className="w-[500px] mx-auto" />
          <div className="">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jobName"
              >
                Job Name
              </label>
              <input
                type="text"
                id="jobName"
                name="jobName"
                value={formData.jobName}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Job Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jobType"
              >
                Job Type
              </label>
              <input
                type="text"
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="jobType"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jobInfo"
              >
                Job Info
              </label>
              <textarea
                id="jobInfo"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={1}
                className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Introduce your Job in a few lines"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Job description
              </label>
              <textarea
                id="description"
                name="briefDescription"
                value={formData.briefDescription}
                onChange={handleChange}
                rows={2}
                className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="Give a brief explanation about the Job's Role"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                placeholder="location"
                required
              />
              <div className="flex space-x-3 my-3">
                <div className="mb-4 w-1/2 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="salary"
                  >
                    Salary
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                    placeholder="Enter salary"
                    required
                  />
                </div>
                <div className="mb-4 w-1/2 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="shiftTime"
                  >
                    Shift Time
                  </label>
                  <input
                    type="text"
                    id="shiftTime"
                    name="shiftTime"
                    value={formData.shiftTime}
                    onChange={handleChange}
                    className="shadow appearance-none border border-blue-500  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
                    placeholder="Shift Time"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" items-center ">
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:shadow-outline "
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateForm;
