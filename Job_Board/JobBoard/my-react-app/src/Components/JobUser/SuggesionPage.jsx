import React, { useContext, useEffect, useState } from "react";
import { Admincontext } from "../../App";

export const SuggesionPage = () => {
    const { suggesion } = useContext(Admincontext);
    const [subtopic, setSubtopic] = useState([]);

    useEffect(() => {
        setSubtopic(suggesion);
    }, [suggesion]);

    return (
        <div className="p-6 space-y-6">
            {subtopic.map((sugg, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {sugg.skill}{" "}
                        <span className="text-green-600 text-lg">{sugg.level}</span>
                    </h2>
                    <div className="space-y-4">
                        {sugg.subtopics && sugg.subtopics.split(",").map((subtopic, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-700">{subtopic}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {sugg.descriptions.split(",")[i] || 'No description available.'}
                                </p>
                                <a
                                    href={sugg.links.split(",")[i] || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline text-sm mt-2 inline-block"
                                >
                                    {sugg.links.split(",")[i] || 'No link available.'}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
