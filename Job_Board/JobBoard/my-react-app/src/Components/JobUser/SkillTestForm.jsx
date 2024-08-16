import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import jobpic from "../../assets/testskill.svg";
import UserNavBar from "./userNavbar";
import { useNavigate } from "react-router-dom";
import { Admincontext } from "../../App";

const SkillTestForm = () => {
  const navigator = useNavigate();
  const [step, setStep] = useState(1);
  const [sectors, setSectors] = useState([]);
  const [options, setOptions] = useState([]);
  const { setSuggesion } = useContext(Admincontext);
  const [formData, setFormData] = useState({
    preferredSector: "",
    selectedSkills: [],
    knowledgePercentages: {},
    projectExperience: "",
    projectDetails: "",
    interestedCompanies: "",
    expectedSalary: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/sectors").then((response) => {
      setSectors(response.data);
    });
  }, []);

  useEffect(() => {
    if (formData.preferredSector) {
      axios
        .get(
          `http://localhost:8080/api/skills/sector/${formData.preferredSector}`
        )
        .then((response) => {
          setOptions(response.data);
        });
    }
  }, [formData.preferredSector]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setFormData((prevState) => {
      const selectedSkills = prevState.selectedSkills.includes(skill)
        ? prevState.selectedSkills.filter((s) => s !== skill)
        : [...prevState.selectedSkills, skill];

      const knowledgePercentages = { ...prevState.knowledgePercentages };
      if (!prevState.selectedSkills.includes(skill)) {
        knowledgePercentages[skill] = "";
      } else {
        delete knowledgePercentages[skill];
      }

      return {
        ...prevState,
        selectedSkills,
        knowledgePercentages,
      };
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    let canProceed = true;

    if (step === 1 && !formData.preferredSector) {
      toast.error("Please select a preferred sector.");
      canProceed = false;
    } else if (step === 2 && formData.selectedSkills.length === 0) {
      toast.error("Please select at least one skill.");
      canProceed = false;
    } else if (
      step === 3 &&
      Object.keys(formData.knowledgePercentages).some(
        (key) => !formData.knowledgePercentages[key]
      )
    ) {
      toast.error("Please select knowledge level for all selected skills.");
      canProceed = false;
    } else if (step === 4 && !formData.projectExperience) {
      toast.error("Please select your project experience.");
      canProceed = false;
    }

    if (canProceed) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      selectedSkills: formData.selectedSkills.join(","),
      knowledgePercentages: JSON.stringify(formData.knowledgePercentages),
    };
    axios
      .post("http://localhost:8080/api/formData", payload)
      .then((response) => {
        toast.success("Data submitted successfully");
        setSuggesion(response.data);
        console.log(response.data);
        navigator("/skill/suggesion");
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <>
      <UserNavBar />
      <div className="container mx-auto min-h-screen flex bg-gray-100">
        <div className="w-1/2 flex flex-col items-center justify-center p-8">
          <div className="text-center mb-8">
            <p className="text-4xl font-bold mb-2">Welcome,</p>
            <p className="text-3xl font-medium">Provide an overview of your skills</p>
          </div>
          <img
            src={jobpic}
            alt="Job Skills"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center p-8">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-8 rounded-2xl bg-white border border-gray-200"
          >
            {step === 1 && (
              <div className="space-y-6">
                <label className="block">
                  <span className="text-gray-700 font-semibold">Preferred Sector:</span>
                  <select
                    name="preferredSector"
                    value={formData.preferredSector}
                    onChange={handleChange}
                    className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    {sectors.map((sector, index) => (
                      <option key={index} value={sector.name}>
                        {sector.name}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  onClick={handleNext}
                  className="w-24 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <label className="block">
                  <span className="text-gray-700 font-semibold">Related Skills:</span>
                  <div className="mt-2 space-y-2">
                    {formData.preferredSector &&
                      options.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={option.name}
                            name="selectedSkills"
                            value={option.name}
                            checked={formData.selectedSkills.includes(option.name)}
                            onChange={handleSkillChange}
                            className="mr-2"
                          />
                          <label htmlFor={option.name} className="text-gray-700">{option.name}</label>
                        </div>
                      ))}
                  </div>
                </label>
                <button
                  onClick={handleNext}
                  className="w-24 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <label className="block">
                  <span className="text-gray-700 font-semibold">Knowledge Level:</span>
                  <div className="mt-2 space-y-4">
                    {formData.selectedSkills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <label className="block text-gray-700 font-semibold">{skill}:</label>
                        <select
                          name={skill}
                          value={formData.knowledgePercentages[skill] || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              knowledgePercentages: {
                                ...formData.knowledgePercentages,
                                [skill]: e.target.value,
                              },
                            })
                          }
                          className="block w-full p-2 border border-gray-300 rounded-lg"
                        >
                          <option value="">Select</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </label>
                <button
                  onClick={handleNext}
                  className="w-24 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <label className="block">
                  <span className="text-gray-700 font-semibold">Project Experience:</span>
                  <select
                    name="projectExperience"
                    value={formData.projectExperience}
                    onChange={handleChange}
                    className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
                {formData.projectExperience === "Yes" && (
                  <div>
                    <label className="block">
                      <span className="text-gray-700 font-semibold">Project Details:</span>
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
                      />
                    </label>
                  </div>
                )}
                <button
                  onClick={handleNext}
                  className="w-24 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Next
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <label className="block">
                  <span className="text-gray-700 font-semibold">Interested Companies:</span>
                  <input
                    type="text"
                    name="interestedCompanies"
                    value={formData.interestedCompanies}
                    onChange={handleChange}
                    placeholder="Enter company names separated by commas"
                    className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700 font-semibold">Expected Salary Package:</span>
                  <select
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Less than $50,000">Less than ₹50,000</option>
                    <option value="$50,000 - $75,000">₹50,000 - ₹75,000</option>
                    <option value="$75,000 - $100,000">₹75,000 - ₹100,000</option>
                    <option value="More than $100,000">More than ₹100,000</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="w-24 h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SkillTestForm;
