import React, { useState } from "react";

function Filter() {
  const [formData, setFormData] = useState({
    instituteName: "",
    course: "",
    semester: "",
    keywords: "",
  });

  const results = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/100",
      title: "Algorithms Notes",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/100",
      title: "Data Structures PYQs",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/100",
      title: "Operating Systems Notes",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search data:", formData);
  };

  return (
    <div className="wrapper">
      <div className="min-h-screen  flex flex-col items-center py-10 pt-20">
      

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center w-full max-w-4xl  p-4 shadow-md rounded-lg mb-8 gap-4"
      >
        <input
          type="text"
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Institute Name"
        />

        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Course"
        />

        <input
          type="number"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Semester"
        />

        <input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Keywords (seperated by commas)"
        />

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </form>
      <div className="text-gray-200 text-center text-3xl">Search results-</div>
      <div className="flex flex-col flex-wrap w-full h-fit items-center justify-center">
      {results.map((item) => (
  <div key={item.id} className=" flex items-center p-4 bg-white border w-1/2 rounded-lg shadow-md shadow-gray-800 m-2">
    <img src={item.thumbnail} alt={item.title} className="w-32 aspect-1 object-cover rounded-lg px-4 overflow-hidden" />
    <h3 className="text-lg font-semibold w-40 overflow-hidden">{item.title}</h3>
  </div>
))}
      </div>
    </div>
    </div>
  );
}

export default Filter;
