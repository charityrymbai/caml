import React, { useRef, useState } from "react";
import sel from "../../assets/Images/sel.svg";
import uploadLogo from "../../assets/Images/upload.svg";
import { useLocation, useNavigate } from "react-router-dom";
const FileSelector = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    console.log(
      "Selected files:",
      selectedFiles.map((file) => file.name),
    );
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    console.log(
      "Dropped files:",
      droppedFiles.map((file) => file.name),
    );
  };

  const handleUpload = async () => {
    console.log("uploading");
    if (files.length === 0) {
      alert("Please select a PDF file to upload");
      return;
    }

    const file = files[0];

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setError(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/upload/file`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      console.log(data);
      navigate("/fileinfo", { state: { data: data } });
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="flex flex-col items-center h-screen w-full pt-20">
        <div
          className="flex text-center flex-col items-center justify-center bg-gray-200 h-1/2 w-1/2 py-3 px-10 rounded-xl  border-2 border-dashed border-black m-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img src={uploadLogo} alt="" className="h-20" />
          <p className="text-gray-700 font-baloo">Drag and drop here</p>
          <button
            onClick={handleButtonClick}
            className="m-2 flex bg-green-700 text-white px-4 py-2 font-baloo rounded-md shadow-md hover:bg-green-800 transition"
          >
            <img src={sel} className="h-5 mr-1" alt="Select" />
            Select File
          </button>
        </div>

        <div className="flex text-center items-center justify-center p-10  rounded-xl bg-gray-200 h-fit w-fit flex-col ">
          <h3 className="text-black text-xl mb-2 font-bold">Selected Files:</h3>
          <ul className="text-black italic">
            {files.length === 0 ? (
              <li>No files selected.</li>
            ) : (
              files.map((file, index) => <li key={index}>{file.name}</li>)
            )}
          </ul>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleUpload}
          className="mt-10 relative inline-flex items-center justify-center 
      bg-gradient-to-br from-pink-500 to-orange-400 text-white font-bold uppercase 
      text-sm md:text-base tracking-wide py-2 px-5 rounded-lg transition-all duration-200 ease-out 
      hover:opacity-75 hover:scale-90 active:outline-none focus:outline-none"
        >
          Continue
        </button>
        <div>
          {() => {
            if (error) {
              setError("Please select a file to upload");
              setTimeout(() => {
                setError(null);
              }, 5000);
            }
          }}
        </div>
      </div>
    </div>
  );
};

export default FileSelector;
