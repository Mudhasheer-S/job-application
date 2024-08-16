import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Admincontext } from "../../App";
import Navbar from "./Navbar";
import SideNavInDashboard from "./SideNavInDashboard";
export default function Cart() {
  const { companyname } = useContext(Admincontext);
  const navigater = useNavigate();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    console.log(companyname);
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/job/getJob/${companyname}`
        );
        setJobs(response.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [companyname]);
  const handleSubmit = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/job/deleteJob/${id}`
      );
      if (response.status === 200) {
        setJobs(jobs.filter((job) => job.id !== id));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="boreder border-black ">
      <div className="container mx-auto ">
        <div className=" w-[90%] flex justify-center mx-32">
          <div className="grid grid-cols-3 gap-3 w-full py-10  px-10 ">
            {jobs.map((job) => (
              <div className="border border-black rounded-lg" key={job.id}>
                <div className="m-3">
                  <p className="text-2xl font-bold">{job.jobName}</p>
                  <p className="text-1xl font-semibold my-2">{job.location}</p>
                </div>
                <div className="flex  m-3 space-x-8">
                  <p>₹{job.salary}</p>
                  <p>•{job.shiftTime}</p>
                </div>
                <div className="m-3">
                  <p>Posted 6 days ago</p>
                </div>
                <div className="m-3">
                  <p>{job.description}</p>
                </div>
                <div className="flex justify-center space-x-6 mb-4">
                  <button
                    className="text-sm font-semibold bg-orange-600   text-white py-1 px-5 rounded-lg uppercase"
                    onClick={() => {
                      navigater(`/job/update/${job.id}`);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="text-sm  bg-orange-600 text-white py-1 px-5 rounded-lg uppercase"
                    onClick={() => handleSubmit(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
