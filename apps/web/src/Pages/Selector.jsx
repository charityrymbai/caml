import React, { useRef } from "react";
import sel from '../../assets/Images/sel.svg';
const FileSelector = () => {
  const fileInputRef = useRef(null); // Create a ref for the file input

  // Function to handle button click
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      console.log("Selected file:", file.name); // Log the file name (or handle it as needed)
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <div className="flex text-center items-center justify-center bg-gray-700 min-w-[100vw] min-h-[50vh]">
            //content 1
        </div>
      <button
        onClick={handleButtonClick}
        className="m-2 flex bg-green-700 text-white px-4 py-2 font-baloo rounded-md shadow-md hover:bg-yellow-900 transition"
      ><img src={sel} className="h-5 mr-1" alt="sel" />
        Select File
      </button>
      <div className="flex text-center items-center justify-center bg-gray-700 min-w-[100vw] min-h-[50vh]">
            //content 2
        </div>
      <input
        type="file"
        ref={fileInputRef} // Attach ref to the input
        onChange={handleFileChange} // Handle file selection
        className="hidden" // Hide the file input
      />
    </div>
  );
};

export default FileSelector;
