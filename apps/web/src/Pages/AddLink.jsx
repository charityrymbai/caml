import React, { useState } from "react";

function GetLink() {
  const [formData, setFormData] = useState({
    projectName: "",
    githubLink: "",
    description: "",
    keywords: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="wrapper">
      <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg mt-20 mb-5"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Project</h2>

       
        <div className="mb-4">
          <label htmlFor="projectName" className="block text-gray-700 font-semibold mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder=" Weather App"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="githubLink" className="block text-gray-700 font-semibold mb-2">
            GitHub Repository Link
          </label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            placeholder=" https://github.com/.."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

       
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="3"
            required
          ></textarea>
        </div>

       
        <div className="mb-6">
          <label htmlFor="keywords" className="block text-gray-700 font-semibold mb-2">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder=" JavaScript, React, API"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Submit Project
        </button>
      </form>
    </div>
    </div>
  );
}

export default GetLink;

