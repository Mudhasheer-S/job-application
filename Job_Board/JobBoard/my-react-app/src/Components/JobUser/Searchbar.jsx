import { useContext, useState } from "react";
import { Admincontext } from "../../App";

function JobSearchForm() {
  const { setjobName, setLocation } = useContext(Admincontext);

  //const [location, setLocation] = useState("");
  const [title,setTitle] = useState("");
  const [city,setCity] = useState("");
  const handleinput = (e) => {
    e.preventDefault();
    setjobName(title);
    setLocation(city);
  }
  return (
    <div className="container mx-auto w-full mt-12">
      <div className="flex space-x-3  mx-24 ">
        <div className="w-[4.5%]"></div>
        <div className="w-[35%]">
          <label
            htmlFor="jobName"
            className="block text-sm font-medium text-gray-700"
          >
            Job title, keywords, or company
          </label>
          <input
            type="text"
            id="jobName"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-400"
            placeholder="e.g., Software Engineer, Google"
          />
        </div>
        <div className="w-[35%]">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            City, state, zip code, or "remote"
          </label>
          <input
            type="text"
            id="location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border  border-gray-400"
            placeholder="e.g., San Francisco, CA, 94103, or remote"
          />
        </div>
        <div className="w-[15%] mx-20  mt-4">
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleinput}
          >
            Find jobs
          </button>
        </div>
      </div>

      {/* <div className="mt-4 flex justify-between">
        <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Post your resume - It only takes a few seconds
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Post a job today
        </button>
      </div> */}
    </div>
  );
}

export default JobSearchForm;
