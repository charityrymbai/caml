import React, { useEffect, useState } from "react";
import ProfilePic from '../../assets/Images/profile_pic.jpg';
import LinkButton from "../Components/LinkButton";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const [UserDetail, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    if (token === null) {
        navigate("/auth");
    }

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/data/getDashboardDetails`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUserDetails(data.details);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-[#f5f5f5]">
            <div className="bg-gray-950 w-full md:w-1/4 h-1/4 md:h-screen rounded-e-xl flex flex-col items-center p-4">
                <img src={ProfilePic} alt="Profile Pic" className="mt-20 rounded-full w-32 md:w-40 justify-center" />
                <div className="name flex text-white mt-4 p-2 text-2xl md:text-4xl font-anton rounded-lg">
                    {UserDetail.name}
                </div>
                <div className="college flex text-white p-2 mt-2 text-lg md:text-xl font-semibold rounded-lg text-center">
                    {UserDetail.college}
                </div>
                <div className="branch flex text-white p-2 mt-2 text-lg md:text-xl font-semibold rounded-lg text-center">
                    {UserDetail.branch}
                </div>
                <div className="major flex text-white p-2 mt-2 text-lg md:text-xl font-semibold rounded-lg text-center">
                    {UserDetail.major}
                </div>
                <button className="College flex text-gray-950 bg-white p-2 mt-4 text-lg md:text-xl font-semibold rounded-lg text-center shadow-black shadow-lg">
                    My Progress
                </button>
            </div>
            <div className="pt-8 md:pt-32 pl-4 md:pl-16 flex-col h-fit flex justify-center items-center">
                <div className="font-anton text-4xl md:text-5xl pb-5">Upload Here</div>
                <div className="flex flex-col md:flex-row bg-gray-200 p-5 border-red-950 border-2 border-dashed rounded-lg">
                    <button onClick={() => navigate("/addlink")} className="flex bg-black w-full md:w-72 h-fit p-4 rounded-lg text-xl md:text-2xl justify-center items-center text-white mr-0 md:mr-5 mb-4 md:mb-0 shadow-md shadow-black font-anton">
                        Projects
                    </button>
                    <button onClick={() => navigate("/addFile")} className="flex bg-black w-full md:w-72 h-fit p-4 rounded-lg text-xl md:text-2xl justify-center items-center text-white mr-0 md:mr-5 mb-4 md:mb-0 shadow-md shadow-black font-anton">
                        Past Year Question Papers
                    </button>
                    <button onClick={() => navigate("/addFile")} className="flex bg-black w-full md:w-72 h-fit p-4 rounded-lg text-xl md:text-2xl justify-center items-center text-white shadow-md shadow-black font-anton">
                        Notes
                    </button>
                </div>
                <div className="text-4xl font-anton mt-10">OR</div>
                <div className="text-3xl font-merienda mt-10 mb-10 font-bold text-center">Start your Learning Journey Below</div>
                <LinkButton toPath="optpage" text="Start Exploring" />
            </div>
        </div>
    );
}

export default Dashboard;
