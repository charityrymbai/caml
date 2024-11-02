import React from "react";
import ProfilePic from '../../assets/Images/profile_pic.jpg';
import LinkButton from "../Components/LinkButton";

function Dashboard() {
    const UserDetail = {
        name: "Jishnu Duhan",
        college: "National Institute of Technology, Meghalaya",
        branch: "B. Tech.",
        major: "Computer Science and Engineering"
    };
    
    return (
        <div className="flex h-screen bg-[#f5f5f5]">
            <div className="bg-gray-950 w-1/4 h-screen rounded-e-xl flex flex-col items-center">
                <img src={ProfilePic} alt="Profile Pic" className="pt-20 rounded-full w-40 justify-center" />
                <div className="name flex text-white mt-10 p-3 text-4xl max-w-1/4 font-anton rounded-lg">
                    {UserDetail.name}
                </div>
                <div className="college flex text-white p-3 mt-2 text-xl max-w-1/4 font-semibold rounded-lg text-center">
                    {UserDetail.college}
                </div>
                <div className="branch flex text-white p-3 mt-2 text-xl max-w-1/4 font-semibold rounded-lg text-center">
                    {UserDetail.branch}
                </div>
                <div className="major flex text-white p-3 mt-2 text-xl max-w-1/4 font-semibold rounded-lg text-center">
                    {UserDetail.major}
                </div>
                <button className="College flex text-gray-950 bg-white p-3 mt-10 text-xl max-w-1/4 font-semibold rounded-lg text-center shadow-black shadow-lg">
                    My Progress
                </button>
            </div>
            <div className="pt-32 pl-16 flex-col h-fit flex justify-center items-center">
                <div className="font-anton text-5xl pb-5">Upload Here</div>
                <div className="flex bg-gray-200 p-10 border-red-950 border-2 border-dashed rounded-lg">
                    <button className="flex bg-black w-72 h-fit p-4 rounded-lg text-2xl justify-center items-center text-white mr-5 shadow-md shadow-black font-anton">
                        Projects
                    </button>
                    <button className="flex bg-black w-72 h-fit p-4 rounded-lg text-2xl justify-center items-center text-white mr-5 shadow-md shadow-black font-anton">
                        Past Year Question Papers
                    </button>
                    <button className="flex bg-black w-72 h-fit p-4 rounded-lg text-2xl justify-center items-center text-white shadow-md shadow-black font-anton">
                        Notes
                    </button>   
                </div>
                <div className="text-4xl font-anton mt-10">OR</div>
                <div className="text-3xl font-merienda mt-10 mb-10 font-bold">Start your Learing Journey Below</div>
                <LinkButton toPath="auth" text="Start Exploring" />
            </div>
        </div>
    );
}

export default Dashboard;