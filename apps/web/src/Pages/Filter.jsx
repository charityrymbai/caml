import React, { useState } from "react";
import TypewriterPage from "../Components/TypeWrite";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [results, setResults] = useState([{ name: "CS-203", url: "https://ik.imagekit.io/0j12on6az/uploads/charity_t1pb0ImOvS" }]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    instituteName: "",
    course: "",
    semester: "",
    keywords: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hashtags = [{ name: "DLD" }, { name: "BCD" }, { name: "LOGIC GATES" }];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("clicked");
    setLoading(true);
    setError(null); // Reset error state

    try {
      const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/data/getAllUrls`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await res.json();
      setResults(data.results);

    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching results.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="wrapper">
      <div className="min-h-screen flex flex-col items-center py-10 pt-20">
        <div className="text-white text">
          <TypewriterPage text={"Fill up to get Started..."} />
        </div>
        <div className="flex flex-wrap items-center w-full max-w-4xl p-4 shadow-md rounded-lg mb-8 gap-4">
          <input
            type="text"
            name="instituteName"
            value={formData.instituteName}
            onChange={handleChange}
            className="flex-grow px-4 py-2 border shadow-white shadow-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Institute Name"
          />

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="flex-grow shadow-white shadow-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Course"
          />

          <input
            type="number"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="flex-grow px-4 py-2 border shadow-white shadow-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Semester"
          />

          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            className="flex-grow px-4 py-2 border shadow-white shadow-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Keywords (separated by commas)"
          />

          <button
            onClick={handleClick}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
        </div>
        {loading && <div className="text-gray-200">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        <div className="text-gray-200 text-center text-3xl">
          Search results -
        </div>
        <div className="flex flex-col flex-wrap w-full h-fit items-center justify-center">
          {
            results.map((item) => (
              <div
                key={item.upload_id}
                className="flex items-center p-4 bg-white border w-1/2 rounded-lg shadow-md shadow-gray-800 m-2"
              >
                {/* <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-32 aspect-1 object-cover rounded-lg px-4 overflow-hidden"
                /> */}
                <h3 className="text-lg font-semibold w-40 overflow-hidden">
                  {item.name}
                </h3>
                <h3 className="text-lg font-semibold w-40 overflow-hidden">
                  {item.url}
                </h3>
                {hashtags.map((tag) => (
                  <button
                    onClick={()=>{
                      navigate("/hashlurn", { state: { data: tag.name } });
                    }}
                    className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full m-1"
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Filter;
