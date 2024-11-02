import React, { useRef, useState } from "react";
import sel from '../../assets/Images/sel.svg'; // Import your select file icon

const FileSelector = () => {
  const fileInputRef = useRef(null); // Create a ref for the hidden file input
  const [files, setFiles] = useState([]); // State to manage the selected files

  // Function to handle button click
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to an array
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Update state with the selected files
    console.log("Selected files:", selectedFiles.map(file => file.name)); // Log selected files
  };

  // Handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior
  };

  // Handle drop event
  const handleDrop = (event) => {
    event.preventDefault(); // Prevent default behavior
    const droppedFiles = Array.from(event.dataTransfer.files); // Convert FileList to an array
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]); // Update state with the dropped files
    console.log("Dropped files:", droppedFiles.map(file => file.name)); // Log dropped files
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#020617]">
      <div 
        className="flex text-center flex-col items-center justify-center bg-gray-200 h-fit w-fit p-3 rounded-xl  border-2 border-dashed border-black m-4"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Content 1 */}
        <p className="text-gray-700">Drag and drop or use button</p>
        <button
        onClick={handleButtonClick}
        className="m-2 flex bg-green-700 text-white px-4 py-2 font-baloo rounded-md shadow-md hover:bg-yellow-900 transition"
      >
        <img src={sel} className="h-5 mr-1" alt="Select" />
        Select File
      </button>
      </div>
      
      <div className="flex text-center items-center justify-center p-10 rounded-xl bg-gray-200 h-fit w-fit flex-col ">
        {/* Content 2: Display all selected files */}
        <h3 className="text-black mb-2">Selected Files:</h3>
        <ul className="text-black">
          {files.length === 0 ? (
            <li>No files selected.</li>
          ) : (
            files.map((file, index) => (
              <li key={index}>{file.name}</li> // List each file name
            ))
          )}
        </ul>
      </div>
      <input
        type="file"
        ref={fileInputRef} // Attach ref to the input
        onChange={handleFileChange} // Handle file selection
        className="hidden" // Hide the file input
        multiple // Allow multiple files to be selected
      />
    </div>
  );
};

export default FileSelector;
