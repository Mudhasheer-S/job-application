import React from "react";

const ExperienceDetails = ({ experience, handleChange }) => {
  return (
    <div>
      <div className="bg-blue-700 text-white m-4 text-center">
        Enter your Experience Details
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="company"
        >
          Company Name
        </label>
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleChange}
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
          placeholder="Enter your company Name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Job Position
        </label>
        <input
          type="text"
          name="role"
          value={experience.role}
          onChange={handleChange}
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
          placeholder="Enter your job Position"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="experience"
        >
          Enter your Experiance
        </label>
        <input
          type="text"
          name="experience"
          value={experience.experience}
          onChange={handleChange}
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
          placeholder="Enter your job Position"
        />
      </div>
      {/* <div className="flex space-x-3 my-3">
        <div className="mb-4 w-1/2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="expStart"
          >
            Start Date
          </label>
          <input
            type="date"
            name="expStart"
            value={experience.expStart}
            onChange={handleChange}
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
            placeholder="Enter starting date"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="expEnd"
          >
            End Date
          </label>
          <input
            type="date"
            name="expEnd"
            value={experience.expEnd}
            onChange={handleChange}
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
            placeholder="Enter ending date"
          />
        </div>
      </div> */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Job Description
        </label>
        <input
          type="text"
          name="description"
          value={experience.description}
          onChange={handleChange}
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:border-b-4 focus:shadow-outline"
          placeholder="Enter your job description"
        />
      </div>
    </div>
  );
};

export default ExperienceDetails;
