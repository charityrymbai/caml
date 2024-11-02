import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FileInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const [formData, setFormData] = useState({
    type: "",  
    name: "",        
    subject: "",
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

  const buttonHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/data/addpdf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type: formData.type,
        name: formData.name,
        subject: formData.subject,
        description: formData.description,
        keywords: formData.keywords,
        url: data.url,
      }),
    })
    const resData = await res.json();
    navigate("/dashboard");
  };

  return (
    <div className="wrapper">
      <div className="min-h-screen flex items-center justify-center pt-20 mb-5 ">
      <div
        className="w-full max-w-lg p-8 backdrop-blur rounded-lg shadow-md shadow-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Add PDF Details</h2>

        
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-500 font-semibold mb-2">
            Type of PDF
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="notes">Notes</option>
            <option value="pyqs">PYQs</option>
          </select>
        </div>


        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-500 font-semibold mb-2">
            Name 
          </label>
          <input
            type="text"
            id="names"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Name of PDF"
          ></input>
        </div>



        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-500 font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter subject name"
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-500 font-semibold mb-2">
            Course 
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="B.Tech"
          ></input>
        </div>

        
        <div className="mb-6">
          <label htmlFor="keywords" className="block text-gray-500 font-semibold mb-2">
            Topics included (comma-separated)
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="e.g., algorithms, data structures"
            required
          />
        </div>

        <button
          type="submit"
          onClick={buttonHandler}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Submit PDF
        </button>
      </div>
    </div>
    </div>
  );
}

export default FileInfo;
