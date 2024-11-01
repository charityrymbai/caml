import React from "react";
import { useNavigate } from "react-router-dom";
import book from "../../assets/Images/book.svg";
import paper from "../../assets/Images/paper.svg";
import project from "../../assets/Images/project.svg";
import ai from "../../assets/Images/ai.svg";

const LearningPage = () => {
  const navigate = useNavigate();

  // Define an array of button objects
  const buttons = [
    {
      label: "PYQs",
      icon: paper,
      path: "/pyqs",
    },
    {
      label: "Notes",
      icon: book,
      path: "/notes",
    },
    {
      label: "Projects",
      icon: project,
      path: "/projects",
    },
  ];

  return (
    <div className="items-center justify-center min-h-screen h-fit min-w-screen bg-gray-100 ">
      <div className="bg-[#020617] p-6 shadow-lg min-w-full min-h-screen">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#ffedd5] font-baloo">
          How would you like to learn !!
        </h2>
        <div className="rounded-lg p-4 flex justify-between">
          <div className=" flex flex-col bg-[#F5F5DC] rounded-md flex-1 p-4 mr-2 flex items-center p-10 text-lg font-medium text-gray-700 h-screen">
          <h3 className="font-baloo text-2xl">Use our AI Assistant</h3>
            <button
              onClick={() => navigate("/LURN")}
              className="flex rounded-md px-4 py-1 shadow-md hover:text-black hover:shadow-md hover:shadow-black transition"
            >
              <img src={ai} alt="ai" className="h-8" />
              
             <p className="font-baloo text-xl">AI</p> 
            </button>
          </div>
          <div className="bg-[#F5F5DC] rounded-md flex-1 p-4 flex flex-col items-center p-10 text-lg font-medium text-gray-700 h-screen">
            <h3 className="mb-2 text-2xl font-baloo">Data Base</h3>
            <div className="flex flex-col px-3 my-2">
              {buttons.map((button) => (
                <button
                  key={button.label} // Use label as the key
                  onClick={() => navigate(button.path)} // Navigate to the respective path
                  className="flex rounded-md font-baloo my-2 px-4 py-1 mx-1 shadow-md  hover:text-black hover:shadow-md hover:shadow-black transition"
                >
                  <img src={button.icon} className="h-5 " alt={button.label} />
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
