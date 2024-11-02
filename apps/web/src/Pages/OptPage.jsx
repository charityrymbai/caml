import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import aiLogo from '../../assets/Images/ai.svg';
import dataLogo from '../../assets/Images/dataBase.svg';
const BgDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;
const OptPage = () => {
  const navigate = useNavigate();

  return (
    
      <BgDiv className="flex flex-col ">
      <div className="text-2xl p-4 md:text-4xl text-white mt-20 text-center">Choose one to kickstart your LEARNING JOURNEY . . .</div>
      <div className="flex items-center justify-center flex-col md:flex-row">
      <button onClick={() => navigate("/lurn")} className="mt-20 mx-2 min-w-fit p-2 flex flex-col items-center py-5 justify-center text-3xl font-anton bg-white w-1/4 h-1/2 border-black border-2 rounded-xl hover:shadow-black hover:bg-gray-200 shadow-lg">
        <img src={aiLogo} alt="" className="h-14"/>
        Use AI Assistant
      </button>
      <button onClick={() => navigate("/filter")} className="flex flex-col min-w-fit p-2 items-center justify-center mt-20 py-5 mx-2 text-3xl font-anton bg-white w-1/4 h-1/2 border-black border-2 rounded-xl hover:shadow-black hover:bg-gray-200 shadow-lg">
      <img src={dataLogo} alt="" className="h-12"/>
        Use Existing Resources
      </button>
      </div>
    </BgDiv>
    
  );
};

export default OptPage;
