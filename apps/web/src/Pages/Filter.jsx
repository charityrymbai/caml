import React, { useState } from "react";
import TypewriterPage from "../Components/TypeWrite";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    instituteName: "",
    course: "",
    semester: "",
    keywords: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchButtonVisibility, setSearchButtonVisibility] = useState(true);

  const handleChange = (e) => {
    setSearchButtonVisibility(false);
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
    setError(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/data/search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="min-h-screen w-screen flex flex-col p-4 items-center pt-20">
        <div className="text-white text">
          <TypewriterPage text={"Fill up to get Started..."} />
        </div>
        <div className="flex flex-wrap  items-center w-full max-w-4xl p-4 shadow-md rounded-lg mb-8 gap-4">
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
            disabled={searchButtonVisibility}
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

        <div className="flex flex-col flex-wrap p-4 w-full h-fit items-center justify-center">
          {results.map((item) =>
            item.Uploads && item.Uploads.length > 0 ? (
              item.Uploads.map((upload) => (
                <div
                  key={upload.upload_id}
                  className="flex-wrap flex items-center p-4 bg-white border w-4/5 md:w-1/2 rounded-lg shadow-md shadow-gray-800 m-2"
                >
                  <h3 className="text-lg text-green-700 font-semibold w-fit px-2 overflow-hidden">
                    {upload.name}
                  </h3>
                  <h3 className="text-lg text-blue-900 font font-semibold w-fit underline overflow-hidden">
                    <a href={upload.url}>{upload.url}</a>
                  </h3>

                  {upload.HashTags_upload &&
                    upload.HashTags_upload.map((tag) => (
                      <button
                        key={tag.hash_tag_id}
                        onClick={() => {
                          navigate("/hashlurn", {
                            state: { data: tag.hash_tag },
                          });
                        }}
                        className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-lg m-1"
                      >
                        {tag.hash_tag}
                      </button>
                    ))}
                </div>
              ))
            ) : (
              <div></div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
