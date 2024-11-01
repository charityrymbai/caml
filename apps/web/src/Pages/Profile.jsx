import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    collegeName: '',
    course: '',
    specialization: '',
    semester: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add code to send the form data to a server if needed
  };

  return (
    <div className=" flex flex-col justify-center  items-center min-h-screen min-w-screen bg-gradient-to-r from-blue-300 to-purple-600 h-fit ">
        <div className='font-curs font-black text-center p-4 mt-2 text-xl'><h1 className='text-4xl'>Welcome to Your Learning Hub! 🎉</h1>
<br/>

<br/>
Start exploring, upload your materials, and let AI be your guide to smarter studying. Let’s make learning simpler and more inspiring!</div>
      <div className='flex flex-col flex-col sm:flex-row'>
        
        <div className=' max-w-[50vw] overflow-hidden'>
        <form onSubmit={handleSubmit} className="flex flex-col min-w-50vw items-center bg-white p-8 shadow-lg rounded-lg">
        
        <div className="m-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="m-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
            College Name
          </label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="m-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
            Course
          </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="m-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">
            Specialization
          </label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="m-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
            Current Semester
          </label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="m-1 w-fit h-fit bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;